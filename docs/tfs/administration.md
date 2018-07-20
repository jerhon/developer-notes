# TFS Administration


# Queries

## Find File Storage in DB

This will give the amount of space by system in the File storage in TFS. It was taken out of a support thread.

```SQL
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