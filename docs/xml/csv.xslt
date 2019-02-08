<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:strip-space elements="*" />
    <xsl:output method="text" indent="no" />
    <xsl:template name="string-replace-all">
        <xsl:param name="text" />
        <xsl:param name="replace" />
        <xsl:param name="by" />
        <xsl:choose>
            <xsl:when test="contains($text, $replace)">
                <xsl:value-of select="substring-before($text,$replace)" />
                <xsl:value-of select="$by" />
                <xsl:call-template name="string-replace-all">
                    <xsl:with-param name="text" select="substring-after($text,$replace)" />
                    <xsl:with-param name="replace" select="$replace" />
                    <xsl:with-param name="by" select="$by" />
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$text" />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="csv-escape">
        <xsl:param name="text" />
        <xsl:choose>
            <xsl:when test="contains($text, '&quot;') or contains($text, ',')">
                <xsl:text>&quot;</xsl:text>
                <xsl:call-template name="string-replace-all">
                    <xsl:with-param name="text"><xsl:value-of select="$text" /></xsl:with-param>
                    <xsl:with-param name="replace">&quot;</xsl:with-param>
                    <xsl:with-param name="by">&quot;&quot;</xsl:with-param>
                </xsl:call-template>
                <xsl:text>&quot;</xsl:text>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$text" />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template match="BASE_XPATH1">
        <xsl:variable name="col1"><xsl:call-template name="csv-escape">
            <xsl:with-param name="text" select="SOME_XPATH1" />
        </xsl:call-template></xsl:variable>
        <xsl:variable name="col2"><xsl:call-template name="csv-escape">
            <xsl:with-param name="text" select="SOME_XPATH2" />
        </xsl:call-template></xsl:variable>
        <xsl:value-of select="$col1" /><xsl:text>,</xsl:text><xsl:value-of select="$col2" /><xsl:text>&#xA;</xsl:text>
    </xsl:template>
</xsl:stylesheet> 