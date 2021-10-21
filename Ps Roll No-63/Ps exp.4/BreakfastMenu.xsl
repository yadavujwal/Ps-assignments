<?xml version = "1.0"?>


<xsl:stylesheet version = "1.0"

   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

    <xsl:output method = "html" omit-xml-declaration = "no"       

        doctype-system =

         "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"

       doctype-public = "-//W3C//DTD XHTML 1.0 Strict//EN"/>

    <xsl:template match = "/">

        <!-- match root element -->

  <style  type="text/css">

            .space10  {margin-left:10px}

        </style>

 

<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

    <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">

        <div style="text-align:center;color:red">Our Breakfast Menu</div>

        <BR></BR>

        <xsl:for-each select="breakfast_menu/food">

            <div style="background-color:teal;color:white;padding:4px">

                <span style="font-weight:bold">

                    <xsl:value-of select="name"/></span>

    <!--<span style="margin-left:10px">   leaving space-->

                <span class="space10">  <!--leaving space using a class -->              

                    The price is <xsl:value-of select="price"/></span>

            </div>

            <div style="margin-left:20px;margin-bottom:1em;font-size:1em">

                <xsl:value-of select="description"/>.

                <span style="font-style:italic; padding:20px; color:red" >

                    <xsl:value-of select="calories"/> (calories per serving)

                </span>

            </div>

        </xsl:for-each>

    </body>

</html>

    </xsl:template>

</xsl:stylesheet>

 