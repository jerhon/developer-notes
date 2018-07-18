# TFS Administration


# Queries

## Find File Storage in DB

This will give the amount of space by system in TFS storage. It was taken out of a support thread.

```SQL
SELECT 
 t.NAME AS TableName,
 i.name AS indexName,
 SUM(p.rows) AS RowCounts,
 SUM(a.total_pages) AS TotalPages, 
 SUM(a.used_pages) AS UsedPages, 
 SUM(a.data_pages) AS DataPages,
 (SUM(a.total_pages) * 8) / 1024 AS TotalSpaceMB, 
 (SUM(a.used_pages) * 8) / 1024 AS UsedSpaceMB, 
 (SUM(a.data_pages) * 8) / 1024 AS DataSpaceMB
FROM 
 sys.tables t
INNER JOIN  
 sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN 
 sys.partitions p ON i.object_id = p.OBJECT_ID AND i.index_id = p.index_id
INNER JOIN 
 sys.allocation_units a ON p.partition_id = a.container_id
WHERE 
 t.NAME NOT LIKE 'dt%' AND
 i.OBJECT_ID > 255 AND  
 i.index_id <= 1
GROUP BY 
 t.NAME, i.object_id, i.index_id, i.name 
ORDER BY TotalSpaceMB DESC

;WITH tbl AS (
SELECT  fm.PartitionId,
        fm.FileLength,
        fm.CompressedLength,
         fm.DeletedOn,
        fr.OwnerId,
        ROW_NUMBER() OVER (PARTITION BY fr.ResourceId ORDER BY (SELECT 0)) RowNum
FROM    tbl_FileMetadata  fm WITH (NOLOCK)
LEFT JOIN tbl_FileReference fr WITH (NOLOCK)
ON      fr.PartitionId = fm.PartitionId
        AND fr.ResourceId = fm.ResourceId
)
SELECT  CASE OwnerId
            WHEN 0 THEN 'Generic'
            WHEN 1 THEN 'VersionControl'
            WHEN 2 THEN 'WorkItemTracking'
            WHEN 3 THEN 'TeamBuild'
            WHEN 4 THEN 'TeamTest'
            WHEN 5 THEN 'Servicing'
            WHEN 6 THEN 'UnitTest'
            WHEN 7 THEN 'WebAccess'
            WHEN 8 THEN 'ProcessTemplate'
            WHEN 9 THEN 'StrongBox'
            WHEN 10 THEN 'FileContainer'
            WHEN 11 THEN 'CodeSense'
            WHEN 12 THEN 'Profile'
            WHEN 13 THEN 'Aad'
            WHEN 14 THEN 'Gallery'
            ELSE STR(OwnerId)
        END SubSystem,
        /* COUNT(*) NumberOfFiles, */
        /* SUM(FileLength) / 1048576.0 SizeInMB, */
        SUM(CompressedLength) / 1048576.0 CompressedSizeInMB
FROM    tbl
WHERE   RowNum = 1
        AND DeletedOn IS NULL
GROUP BY OwnerId
ORDER BY SUM(CompressedLength) DESC
```