/*

 MyFonts Webfont Build ID 3232162, 2016-06-13T09:56:52-0400

 The fonts listed in this notice are subject to the End User License
 Agreement(s) entered into by the website owner. All other parties are 
 explicitly restricted from using the Licensed Webfonts(s).

 You may obtain a valid license at the URLs below.

 Webfont: GloberBook by Fontfabric
 URL: http://www.myfonts.com/fonts/font-fabric/glober/book/
 Copyright: Copyright (c) 2014 by Fontfabric LLC. All rights reserved.
 Licensed pageviews: 20,000

 Webfont: GloberBold by Fontfabric
 URL: http://www.myfonts.com/fonts/font-fabric/glober/bold/
 Copyright: Copyright (c) 2014 by Fontfabric LLC. All rights reserved.
 Licensed pageviews: 20,000

 Webfont: GloberBoldItalic by Fontfabric
 URL: http://www.myfonts.com/fonts/font-fabric/glober/bold-italic/
 Copyright: Copyright (c) 2014 by Fontfabric LLC. All rights reserved.
 Licensed pageviews: 20,000

 Webfont: GloberBookItalic by Fontfabric
 URL: http://www.myfonts.com/fonts/font-fabric/glober/book-italic/
 Copyright: Copyright (c) 2014 by Fontfabric LLC. All rights reserved.
 Licensed pageviews: 20,000

 Webfont: GloberRegularItalic by Fontfabric
 URL: http://www.myfonts.com/fonts/font-fabric/glober/regular-italic/
 Copyright: Copyright (c) 2014 by Fontfabric LLC. All rights reserved.
 Licensed pageviews: 20,000

 Webfont: GloberSemiBold by Fontfabric
 URL: http://www.myfonts.com/fonts/font-fabric/glober/semi-bold/
 Copyright: Copyright (c) 2014 by Fontfabric LLC. All rights reserved.
 Licensed pageviews: 20,000

 Webfont: AgiloHandwritingPro by SoftMaker
 URL: http://www.myfonts.com/fonts/softmaker/agilo-handwriting/handwriting/
 Copyright: Copyright (c) 2012 by SoftMaker Software GmbH and its licensors. All rights reserved.
 Licensed pageviews: Unlimited


 License: http://www.myfonts.com/viewlicense?type=web&buildid=3232162

 ? 2016 MyFonts Inc
*/
var protocol=document.location.protocol;"https:"!=protocol&&(protocol="http:");var count=document.createElement("script");count.type="text/javascript";count.async=!0;count.src=protocol+"//hello.myfonts.net/count/3151a2";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(count,s);var browserName,browserVersion,webfontType;if("undefined"==typeof woffEnabled)var woffEnabled=!0;var svgEnabled=0,woff2Enabled=1;
if("undefined"!=typeof customPath)var path=customPath;else{var scripts=document.getElementsByTagName("SCRIPT"),script=scripts[scripts.length-1].src;script.match("://")||"/"==script.charAt(0)||(script="./"+script);path=script.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")}
var wfpath=path+"/webfonts/",browsers=[{regex:"MSIE (\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:9,type:"woff"},{version:5,type:"eot"}]},{regex:"Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$3)",type:[{version:11,type:"woff"}]},{regex:"Firefox[/s](\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:3.6,type:"woff"},{version:3.5,type:"ttf"}]},{regex:"Edge/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:12,type:"woff"}]},
{regex:"Chrome/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:36,type:"woff2"},{version:6,type:"woff"},{version:4,type:"ttf"}]},{regex:"Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$1)",type:[{version:4.1,type:"woff"},{version:3.1,type:"svg#wf"},{version:2.2,type:"ttf"}]},{regex:"Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",unhinted:!0,type:[{version:5,
type:"woff"},{version:4.2,type:"ttf"},{version:1,type:"svg#wf"}]},{regex:"Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",versionRegex:"1.0",type:[{version:1,type:"svg#wf"}]},{regex:"Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:5.1,type:"woff"},{version:3.1,type:"ttf"}]},{regex:"Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",versionRegex:"new Number(RegExp.$3)",type:[{version:24,type:"woff2"},{version:11.1,type:"woff"},
{version:10.1,type:"ttf"}]}],browLen=browsers.length,suffix="",i=0;
a:for(;i<browLen;i++){var regex=new RegExp(browsers[i].regex);if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);var typeLen=browsers[i].type.length;for(j=0;j<typeLen;j++)if(browserVersion>=browsers[i].type[j].version&&(1==browsers[i].unhinted&&(suffix="_unhinted"),webfontType=browsers[i].type[j].type,"woff"!=webfontType||woffEnabled)&&("woff2"!=webfontType||woff2Enabled)&&("svg#wf"!=webfontType||svgEnabled))break a}else webfontType="woff"}
/(Macintosh|Android)/.test(navigator.userAgent)&&"svg#wf"!=webfontType&&(suffix="_unhinted");var head=document.getElementsByTagName("head")[0],stylesheet=document.createElement("style");stylesheet.setAttribute("type","text/css");head.appendChild(stylesheet);
for(var fonts=[{fontFamily:"GloberBook",url:wfpath+"3151A2_0"+suffix+"_0."+webfontType},{fontFamily:"GloberBold",url:wfpath+"3151A2_1"+suffix+"_0."+webfontType},{fontFamily:"GloberBoldItalic",url:wfpath+"3151A2_2"+suffix+"_0."+webfontType},{fontFamily:"GloberBookItalic",url:wfpath+"3151A2_3"+suffix+"_0."+webfontType},{fontFamily:"GloberRegularItalic",url:wfpath+"3151A2_4"+suffix+"_0."+webfontType},{fontFamily:"GloberSemiBold",url:wfpath+"3151A2_5"+suffix+"_0."+webfontType},{fontFamily:"AgiloHandwritingPro",
url:wfpath+"3151A2_6"+suffix+"_0."+webfontType}],len=fonts.length,css="",i=0;i<len;i++){var format="svg#wf"==webfontType?'format("svg")':"ttf"==webfontType?'format("truetype")':"eot"==webfontType?"":'format("'+webfontType+'")',css=css+("@font-face{font-family: "+fonts[i].fontFamily+";src:url("+fonts[i].url+")"+format+";");fonts[i].fontWeight&&(css+="font-weight: "+fonts[i].fontWeight+";");fonts[i].fontStyle&&(css+="font-style: "+fonts[i].fontStyle+";");css+="}"}
stylesheet.styleSheet?stylesheet.styleSheet.cssText=css:stylesheet.innerHTML=css;
