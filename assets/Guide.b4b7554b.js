import{_ as p,o as u,c as g,a as e,t as I,d as T,b as t,e as o,w as E,u as L,f as l,R,p as A,g as N}from"./index.cd354871.js";const G={name:"Badge",props:{content:{type:String,default:"Badge"}}};const P={class:"unselectable badge"},U={style:{"font-weight":"700"}};function S(s,r,i,c,d,h){return u(),g("div",P,[e("p",U,I(i.content),1)])}const n=p(G,[["render",S],["__scopeId","data-v-9ade8ae9"]]),a=s=>(A("data-v-1093fdbc"),s=s(),N(),s),X={class:"page"},D=a(()=>e("div",{class:"side-menu"},null,-1)),W={class:"left-aligned text-wrapper"},B=a(()=>e("span",{class:"unselectable title"},[t(" Welcome to the "),e("span",{class:"red bold"},"Fun Zone")],-1)),M={class:"text"},J=a(()=>e("br",null,null,-1)),z=l('<span class="disclaimer text" data-v-1093fdbc><span class="red bold" data-v-1093fdbc>Disclaimer</span><br data-v-1093fdbc> This guide is mainly tailored for the Microsoft ecosystem (Windows 7 onwards to be precise), simply because we&#39;re dealing with a ton of <span class="code-fragment" data-v-1093fdbc>.exe</span> files here. Compatability is a big factor too. I will mention how to set up things for non-Windows systems here and there, but I cannot guarantee that it&#39;ll work. </span><div class="sep-space" data-v-1093fdbc></div><div class="sep-space" data-v-1093fdbc></div><span class="unselectable title" data-v-1093fdbc> The <span class="red bold" data-v-1093fdbc>Tools</span></span><span class="text" data-v-1093fdbc> Before we can actually start with the fun stuff, we need to go through a list of tools you may or may not need in order to play those games. While some games were developed by english speaking folks or have an english localization due to popular demand, many do not, so in order for you to enjoy them we&#39;ll have to take a look at certain locale emulators, translation tools, and so on. I honestly highly recommend to download all of them, but I&#39;ve also included a small badge next to each program, indicating how important it actually is to have. </span>',5),j={class:"app-wrapper"},O=a(()=>e("span",{class:"subtitle"},"1. WinRar / 7-Zip",-1)),C=a(()=>e("span",{class:"text"},[t(" Bit of an obvious one, but in case you don't have an unzipping tool yet, now is the time. Most games you'll download ship in a "),e("span",{class:"code-fragment"},".zip"),t(" or "),e("span",{class:"code-fragment"},".rar"),t(` file. In order to open (to "unzip") these files, you'll need either WinRar or 7-Zip. Download `),e("span",{class:"bold"},"one"),t(" of the two. It doesn't really matter which of the two. WinRar infamously starts pesting you after the 40-day trial ends (don't worry, you will still be able to use it) \u2014 but really, it doesn't matter. ")],-1)),K={class:"app-wrapper"},q=a(()=>e("span",{class:"subtitle"},"2. LEGUI",-1)),Z=l('<span class="text" data-v-1093fdbc> Or just LE, short for Locale Emulator, is a helpful tool allowing you to swindle whatever program you want to open into thinking that you&#39;re actually running it with a Japanese system. I have already teased at it before, but there aren&#39;t that many games (although, still more than you might expect) that have an english version available. If they don&#39;t, chances are high that they were only meant to be played by a Japanese audience, thus forcing you to join the ranks as an imposter. There&#39;s also plenty of games that got translated by dedicated fans, in which case the same thing still applies however. And oddly enough, there are even a few with an official english translation that <i data-v-1093fdbc>still</i> require a Japanese system to run on. LE also helps to get rid of unicode issues by converting non-unicode codepages into the one you need, even if the game would run perfectly fine without any locale emulation.<br data-v-1093fdbc><br data-v-1093fdbc> In any case, follow the installation steps as described in the link above. If you have no idea how to get stuff off of GitHub, just get the MEGA version. Also, and that&#39;s important, install it at an appropriate location and keep it there. I have my LE stuff in a folder hidden 2 folders deep on my desktop. Do not delete it. <span class="bold" data-v-1093fdbc>Do not move it</span>. If you chose a wrong install location, uninstall the entire thing as described on the LE page and start anew.<br data-v-1093fdbc> In case you&#39;re using Windows 11 by the way, don&#39;t worry, it works, even if they don&#39;t list it on their page. </span><span class="disclaimer text" data-v-1093fdbc><span class="bold" data-v-1093fdbc>Important</span>: LE only works for x86 (32-bit) applications. If the game you want to emulate is x64 (64-bit), you must install <span class="bold" data-v-1093fdbc>NTLEA</span>. </span><div class="sep-space" data-v-1093fdbc></div>',3),F=a(()=>e("span",{class:"code-fragment"},"LEGUI.exe",-1)),V=a(()=>e("span",{class:"code-fragment"},"LEGUI.exe",-1)),$=a(()=>e("br",null,null,-1)),H=a(()=>e("br",null,null,-1)),Y=a(()=>e("br",null,null,-1)),Q=a(()=>e("br",null,null,-1)),ee=a(()=>e("span",{class:"code-fragment"},"LEGUI.exe",-1)),te=a(()=>e("span",{class:"code-fragment"},".exe",-1)),ae=a(()=>e("i",null,"Run in Japanese",-1)),oe=a(()=>e("i",null,"Run in Japanese (Admin)",-1)),ne=a(()=>e("br",null,null,-1)),se=a(()=>e("br",null,null,-1)),ie={class:"app-wrapper"},le=a(()=>e("span",{class:"subtitle"},"3. NTLEA",-1)),re=a(()=>e("span",{class:"code-fragment"},"ntleas046_x64.7z",-1)),ce=a(()=>e("span",{class:"bold"},"not",-1)),de=a(()=>e("br",null,null,-1)),he=a(()=>e("br",null,null,-1)),pe=a(()=>e("span",{class:"code-fragment"},"ntleasWin.exe",-1)),ue=a(()=>e("i",null,"Japanese (Shift-JIS)",-1)),ge=a(()=>e("i",null,"Japanese",-1)),fe=a(()=>e("br",null,null,-1)),me=a(()=>e("br",null,null,-1)),ye={class:"app-wrapper"},_e=a(()=>e("span",{class:"subtitle"},"4. Textractor",-1)),be=a(()=>e("span",{class:"text"},[t(" Unless you're one of the 130 million-ish people that are able to speak Japanese, chances are high you'll want a tool that helps you with translating moon runes. Fortunately enough, there is a small yet dedicated fan base actively translating the better games into english, but once in a while you'll still come across a game that doesn't have a translation because it's either very niche or very new, in which case Textractor might come in useful."),e("br"),e("br"),t(" After downloading Textractor (I recommend using the "),e("span",{class:"code-fragment"},"Textractor-5.X.X-Setup.exe"),t(") the installation folder will contain a x64 and a x86 folder. Depending on whether the game is x86 or x64, you'll have to open the corresponding folder, scroll down, and double-click the "),e("span",{class:"code-fragment"},"Textractor.exe"),t(" to run the auto-translation software. ")],-1)),we=a(()=>e("div",{class:"sep-space"},null,-1)),ve=a(()=>e("span",{class:"text"}," Don't worry about picking the wrong instruction set \u2014 if you try to run a x86 game with the x64 version, Textractor will just tell you to switch to the other one. Using Textractor overall is a bit hit or miss sadly. It is a bit hard to use and only works about 50% of the time depending on the game. But if it works it works, and it is definitely still your best all-round option to have. ",-1)),xe={class:"app-wrapper"},ke=a(()=>e("span",{class:"subtitle"},"5. XUnity Auto Translator",-1)),Ie=l('<span class="text" data-v-1093fdbc> If the game you&#39;re about to play was made with Unity, you potentially have a better option than using Textractor. All you have to do in this case is go to the XUnity Auto Translator GitHub release page provided above, download the <span class="code-fragment" data-v-1093fdbc>XUnity.AutoTranslator-ReiPatcher-5.X.X.zip</span>, extract it into the game folder next to the main <span class="code-fragment" data-v-1093fdbc>.exe</span> file and run the <span class="code-fragment" data-v-1093fdbc>GameExe (Patch and Run).lnk</span>. From that point forward you&#39;ll be able to launch the already translated game from the main <span class="code-fragment" data-v-1093fdbc>.exe</span> file. </span>',1),Te=a(()=>e("span",{class:"bold"},"Important",-1)),Ee=a(()=>e("i",null,"BepInEx Plugin",-1)),Le=a(()=>e("div",{class:"sep-space"},null,-1)),Re={class:"app-wrapper"},Ae=a(()=>e("span",{class:"subtitle"},"6. RPG Maker RTP",-1)),Ne=a(()=>e("span",{class:"text"},[t(" Occasionally, some japanese games made in RPG Maker require you to download the so-called "),e("i",null,"RPG Maker Run Time Package"),t(" (RTP) in order to run them. Unlike the actual RPG Maker tools, the RTP is completely free and used to minimize the file size in which games need to be shipped out. Out of all the games I have downloaded I only needed it twice so far, but if you want to avoid any complications with that altogether, click on the link above and download the RTP for "),e("span",{class:"bold"},"VX Ace"),t(". Depending on the RPG Maker game (and thus the age of the game) you might require another version, but so far I only needed the VX Ace one. ")],-1)),Ge=a(()=>e("span",{class:"unselectable title"},[t(" Where to find "),e("span",{class:"red bold"},"The Goods")],-1)),Pe=T({__name:"Guide",setup(s){const r="https://en.wikipedia.org/wiki/Eroge",i="https://imgur.com/tZZMLor",c="https://imgur.com/2Mhosrp",d="https://www.336gamereviews.com/how-to-play-japanese-games-on-windows-10/",h="https://imgur.com/jjzR3Fx",f="https://www.youtube.com/watch?v=eecEOacF6mw",m="https://github.com/bbepis/XUnity.AutoTranslator#installation",y="https://www.win-rar.com/",_="https://www.7-zip.org/",b="https://pooi.moe/Locale-Emulator/",w="https://github.com/zxyacb/ntlea/releases",v="https://github.com/Artikash/Textractor/releases",x="https://github.com/bbepis/XUnity.AutoTranslator/releases/tag/v5.2.0",k="https://www.rpgmakerweb.com/run-time-package";return(Ue,Se)=>(u(),g("main",X,[D,e("div",W,[B,e("span",{class:"text"},[t(" Although chances are high you already know why you're here, I'll explain what this guide is all about once more, just in case. This guide is targetted to those who are interested starting with so-called "),e("a",{href:r,target:"_blank",rel:"noopener norefferer"},"Eroge"),t(" (\u30A8\u30ED\u30B2, Erotic Game): Japanese games that feature explicit content, mainly graphics of sexual nature, inside them. Unfortunately, many of them are hardly accessible to the average person, especially if you live outside of Japan, which is why I felt compelled to write something that helps you to navigate through this \u2014 frankly speaking \u2014 absolute mess. ")]),e("span",M,[t(' If you already know everything and feel comfortable enough getting what you need without this guide, feel free to skip this entire segment by either scrolling down and clicking on the "Recommend Me Something" button, or by clicking '),o(L(R),{to:"/eroge"},{default:E(()=>[t("here")]),_:1}),t(". If you feel like you're still unsure, I suggest you stick around and give this bit a read. It might seem long, but I'll try to entertain you as much as I can on your journey to peek degeneracy."),J,t(" So buckle up buckaroo, cuz' this is gonna be quite the wild ride. ")]),z,e("div",j,[O,o(n,{content:"Required",class:"bg-req"})]),e("span",{class:"dl text"},[e("a",{href:y,target:"_blank",rel:"noopener norefferer"},"WinRar (Download)"),t(),e("a",{href:_,target:"_blank",rel:"noopener norefferer"},"7-Zip (Download)")]),C,e("div",K,[q,o(n,{content:"Recommended",class:"bg-rec"})]),e("span",{class:"dl text"},[e("a",{href:b,target:"_blank",rel:"noopener norefferer"},"LE (Download)")]),Z,e("span",{class:"text"},[t(" After installing it, open the installation folder and double-click the "),F,t(". You will hopefully be greeted by a small window with a few settings. In case you don't see anything, attempt starting the "),V,t(" as administrator. If that doesn't help, restart your PC. If you still don't see anything, uninstall the application and start anew."),$,H,t(" If everything is fine and you see the window, set it up as in the image seen "),e("a",{href:i,target:"_blank",rel:"noopener norefferer"},"here"),t("."),Y,Q,t(" Now click 'Save', close the "),ee,t(" and restart your PC. If everything has worked correctly, when right-clicking your x32 "),te,t(` of choice (make sure it's x32, otherwise you won't see the option), you should be able to see a "Locale Emulator" option as visualized on the LE page (or `),e("a",{href:c,target:"_blank",rel:"noopener norefferer"},"here"),t("). When hovering over it, you can click "),ae,t(" or "),oe,t(' to start the game in the required locale. Under Windows 11, the option is hidden behind the "Show More Options" tab when right-clicking your application.'),ne,se,t(" If nothing works or this is too complicated for you, you also have the option to change your system locale to Japanese and install a Japanese Language Pack as seen in "),e("a",{href:d,target:"_blank",rel:"noopener norefferer"},"this tutorial"),t(", in which case the LE and NTLEA installations become superfluous. However, I highly suggest to install LE (and NTLEA) instead, as changing your locale can come with certain, sometimes unwanted side effects. ")]),e("div",ie,[le,o(n,{content:"Recommended",class:"bg-rec"})]),e("span",{class:"dl text"},[e("a",{href:w,target:"_blank",rel:"noopener norefferer"},"NTLEA (Download)")]),e("span",{class:"text"},[t(" As already mentioned in the LE segment, LE can only emulate x86 applications. Although I have noticed that there are more eroge shipped in x86 than in x64, you'll once in a while still get a x64 one, which is where NTLEA comes in handy. After clicking on the download link above, click on the "),re,t(" and extract the archive to a place you can easily find. I have it in a folder next to my LE installation, do "),ce,t(" extract it in any of your games' folders."),de,he,t(" Once extracted, double-click the "),pe,t(" and verify that the selected codepage is set to "),ue,t(" and the selected locale is "),ge,t(". Click on 'Save & Exit'."),fe,me,t(" If you have done everything correctly, you'll see a 'Run With Ntleas' option after right-clicking a x64 program, as seen "),e("a",{href:h,target:"_blank",rel:"noopener norefferer"},"here"),t(". If you don't see anything, restart your PC or try to open NTLEA as administrator. In order to run your game, you'll have to click on 'Open Config Dialog', make sure that the just mentioned codepage and locale settings are set to Japanese and click on 'Save & Run' at the bottom. ")]),e("div",ye,[_e,o(n,{content:"Optional",class:"bg-opt"})]),e("span",{class:"dl text"},[e("a",{href:v,target:"_blank",rel:"noopener norefferer"},"Textractor (Download)")]),be,e("span",{class:"disclaimer text"},[t(" I highly recommend watching "),e("a",{href:f,target:"_blank",rel:"noopener norefferer"},"this short video"),t(" made by the creator of Textractor to understand how to properly use it. ")]),we,ve,e("div",xe,[ke,o(n,{content:"Optional",class:"bg-opt"})]),e("span",{class:"dl text"},[e("a",{href:x,target:"_blank",rel:"noopener norefferer"},"XUnity Auto Translator (Download)")]),Ie,e("span",{class:"disclaimer text"},[Te,t(": If the game is using a plugin manager like BepInEx, please refer to the "),e("a",{href:m,target:"_blank",rel:"noopener norefferer"},"installation section"),t(" of the GitHub repository. You should avoid using the Standalone version in that case and follow the instructions for the corresponding plugin manager. For example, if the game is using BepInEx, the game folder will contain a BepInEx folder. In that case, refer to the "),Ee,t(" section. ")]),Le,e("div",Re,[Ae,o(n,{content:"Optional",class:"bg-opt"})]),e("span",{class:"dl text"},[e("a",{href:k,target:"_blank",rel:"noopener norefferer"},"RPG Maker RTP (Download)")]),Ne,Ge])]))}});const De=p(Pe,[["__scopeId","data-v-1093fdbc"]]);export{De as default};
