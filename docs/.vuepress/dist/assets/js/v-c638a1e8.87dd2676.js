"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[479],{8418:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-c638a1e8",path:"/clamav/",title:"ClamAV Antivirus Server",lang:"en-US",frontmatter:{lang:"en-US",title:"ClamAV Antivirus Server",description:"ClamAV is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats."},excerpt:"",headers:[{level:2,title:"Configuration files",slug:"configuration-files",children:[]},{level:2,title:"Prerequisites",slug:"prerequisites",children:[]},{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"ClamAV server",slug:"clamav-server",children:[{level:3,title:"Keep virus definitions up-to-date",slug:"keep-virus-definitions-up-to-date",children:[]}]},{level:2,title:"Ubuntu client",slug:"ubuntu-client",children:[]},{level:2,title:"Windows client",slug:"windows-client",children:[]},{level:2,title:"Firewall settings",slug:"firewall-settings",children:[]},{level:2,title:"Troubleshooting",slug:"troubleshooting",children:[]},{level:2,title:"Enterprise solutions",slug:"enterprise-solutions",children:[{level:3,title:"Atomic Protector",slug:"atomic-protector",children:[]}]}],filePathRelative:"clamav/README.md",git:{updatedTime:163379062e4,contributors:[{name:"Libellux",email:"fredrik@libellux.com",commits:13}]}}},632:(n,e,a)=>{a.r(e),a.d(e,{default:()=>Mn});var s=a(6252);const t={id:"clamav-antivirus-server",tabindex:"-1"},l=(0,s._)("a",{class:"header-anchor",href:"#clamav-antivirus-server","aria-hidden":"true"},"#",-1),o=(0,s.Uk)(" ClamAV Antivirus Server "),i=(0,s._)("p",null,"ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.",-1),c={href:"https://www.clamav.net/",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("ClamAV website"),u=(0,s.Uk)(),p={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("Source code"),m=(0,s._)("p",null,"Setup and configuration have been tested on following OS with version:",-1),k=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"TIP"),(0,s._)("p",null,"How-to build ClamAV from source will be added in upcoming release.")],-1),b=(0,s._)("ul",null,[(0,s._)("li",null,"Ubuntu- 18.04, 20.04 (Focal Fossa), Windows 10, Windows Server 2019"),(0,s._)("li",null,"ClamAV- 0.102.4")],-1),h={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},_=(0,s._)("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),g=(0,s.uE)('<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li><code>net-tools</code> (optional)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>In this tutorial we will install the ClamAV Antivirus Server (the clamav-daemon <code>192.168.0.1</code>) as a own server/virtual machine. We&#39;ll also use the multiscan option, so the more cores the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server&#39;s TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the master server.</p><h2 id="clamav-server" tabindex="-1"><a class="header-anchor" href="#clamav-server" aria-hidden="true">#</a> ClamAV server</h2><p>First download the ClamAV scanner and the ClamAV daemon.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server@ubuntu:~$ sudo apt-get install clamav clamav-daemon\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Proceed to stop freshclam the automatic database update tool for ClamAV.</p>',9),f=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl stop clamav-freshclam\n")])])],-1),v=(0,s._)("p",null,"Next run freshclam to update to the latest definition database.",-1),U=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" freshclam\n")])])],-1),w=(0,s._)("p",null,[(0,s.Uk)("Once you've ran the freshclam command you can check the log "),(0,s._)("code",null,"/var/log/clamav/freshclam.log"),(0,s.Uk)(" for the current status and then start freshclam again.")],-1),y=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"cat"),(0,s.Uk)(" /var/log/clamav/freshclam.log\nSat Apr "),(0,s._)("span",{class:"token number"},"10"),(0,s.Uk)(),(0,s._)("span",{class:"token number"},"17"),(0,s.Uk)(":51:37 "),(0,s._)("span",{class:"token number"},"2021"),(0,s.Uk)(" -"),(0,s._)("span",{class:"token operator"},">"),(0,s.Uk)(" daily.cvd database is up to "),(0,s._)("span",{class:"token function"},"date"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"("),(0,s.Uk)("version: "),(0,s._)("span",{class:"token number"},"26136"),(0,s.Uk)(", sigs: "),(0,s._)("span",{class:"token number"},"3969743"),(0,s.Uk)(", f-level: "),(0,s._)("span",{class:"token number"},"63"),(0,s.Uk)(", builder: raynman"),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)("\nSat Apr "),(0,s._)("span",{class:"token number"},"10"),(0,s.Uk)(),(0,s._)("span",{class:"token number"},"17"),(0,s.Uk)(":51:37 "),(0,s._)("span",{class:"token number"},"2021"),(0,s.Uk)(" -"),(0,s._)("span",{class:"token operator"},">"),(0,s.Uk)(" main.cvd database is up to "),(0,s._)("span",{class:"token function"},"date"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"("),(0,s.Uk)("version: "),(0,s._)("span",{class:"token number"},"59"),(0,s.Uk)(", sigs: "),(0,s._)("span",{class:"token number"},"4564902"),(0,s.Uk)(", f-level: "),(0,s._)("span",{class:"token number"},"60"),(0,s.Uk)(", builder: sigmgr"),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)("\nSat Apr "),(0,s._)("span",{class:"token number"},"10"),(0,s.Uk)(),(0,s._)("span",{class:"token number"},"17"),(0,s.Uk)(":51:37 "),(0,s._)("span",{class:"token number"},"2021"),(0,s.Uk)(" -"),(0,s._)("span",{class:"token operator"},">"),(0,s.Uk)(" bytecode.cvd database is up to "),(0,s._)("span",{class:"token function"},"date"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"("),(0,s.Uk)("version: "),(0,s._)("span",{class:"token number"},"333"),(0,s.Uk)(", sigs: "),(0,s._)("span",{class:"token number"},"92"),(0,s.Uk)(", f-level: "),(0,s._)("span",{class:"token number"},"63"),(0,s.Uk)(", builder: awillia2"),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)("\nserver@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl start clamav-freshclam\n")])]),(0,s._)("div",{class:"highlight-lines"},[(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("div",{class:"highlight-line"}," ")])],-1),C=(0,s._)("p",null,"Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.",-1),A=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"nano"),(0,s.Uk)(" /etc/clamav/clamd.conf\n")])])],-1),W=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>\n<span class="token comment">#To reconfigure clamd run #dpkg-reconfigure clamav-daemon</span>\n<span class="token comment">#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details</span>\nLocalSocket /var/run/clamav/clamd.ctl\nFixStaleSocket <span class="token boolean">true</span>\nLocalSocketGroup clamav\nLocalSocketMode <span class="token number">666</span>\n<span class="token comment"># TemporaryDirectory is not set to its default /tmp here to make overriding</span>\n<span class="token comment"># the default with environment variables TMPDIR/TMP/TEMP possible</span>\nUser clamav\nTCPSocket <span class="token number">3310</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Restart ClamAV to apply the new changes.</p>',2),x=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl restart clamav-daemon.service\n")])])],-1),P=(0,s._)("p",null,[(0,s.Uk)("To confirm that ClamAV listen to TCP port 3310 run the command below (requires "),(0,s._)("code",null,"net-tools"),(0,s.Uk)(").")],-1),S=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"netstat"),(0,s.Uk)(" -lnp "),(0,s._)("span",{class:"token operator"},"|"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"grep"),(0,s.Uk)(" -E "),(0,s._)("span",{class:"token string"},'"(clam|3310)"'),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"("),(0,s.Uk)("Not all processes could be identified, non-owned process info\n will not be shown, you would have to be root to see it all."),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)("\ntcp        "),(0,s._)("span",{class:"token number"},"0"),(0,s.Uk)("      "),(0,s._)("span",{class:"token number"},"0"),(0,s.Uk)(),(0,s._)("span",{class:"token number"},"0.0"),(0,s.Uk)(".0.0:3310            "),(0,s._)("span",{class:"token number"},"0.0"),(0,s.Uk)(".0.0:*               LISTEN      -\ntcp6       "),(0,s._)("span",{class:"token number"},"0"),(0,s.Uk)("      "),(0,s._)("span",{class:"token number"},"0"),(0,s.Uk)(" :::3310                 :::*                    LISTEN      -\nunix  "),(0,s._)("span",{class:"token number"},"2"),(0,s.Uk)("      "),(0,s._)("span",{class:"token punctuation"},"["),(0,s.Uk)(" ACC "),(0,s._)("span",{class:"token punctuation"},"]"),(0,s.Uk)("     STREAM     LISTENING     "),(0,s._)("span",{class:"token number"},"73674"),(0,s.Uk)("    -                    /var/run/clamav/clamd.ctl\n")])]),(0,s._)("div",{class:"highlight-lines"},[(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("br"),(0,s._)("br")])],-1),T=(0,s._)("p",null,[(0,s.Uk)("Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the "),(0,s._)("a",{href:"#firewall-settings"},"Firewall settings"),(0,s.Uk)(" section for more information.")],-1),V=(0,s._)("h3",{id:"keep-virus-definitions-up-to-date",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#keep-virus-definitions-up-to-date","aria-hidden":"true"},"#"),(0,s.Uk)(" Keep virus definitions up-to-date")],-1),$=(0,s._)("p",null,"To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.",-1),E=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"nano"),(0,s.Uk)(" /etc/clamav/freshclam.conf\n")])])],-1),I=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Check for new database 24 times a day</span>\nChecks <span class="token number">24</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You can use the <code>clamdtop</code> command-line tool when you&#39;ve installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.</p>',2),F=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ clamdtop\n\n  _____/ /___ _____ ___  ____/ / /_____  ____\n / ___/ / __ "),(0,s._)("span",{class:"token variable"},[(0,s._)("span",{class:"token variable"},"`"),(0,s.Uk)("/ __ "),(0,s._)("span",{class:"token variable"},"`")]),(0,s.Uk)("__ "),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("/ __  / __/ __ "),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("/ __ "),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("\n/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /\n"),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("___/_/"),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("__,_/_/ /_/ /_/"),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("__,_/"),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("__/"),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("____/ .___/\n                                     /_/\nConnecting to: /var/run/clamav/clamd.ctl\n")])])],-1),D=(0,s._)("h2",{id:"ubuntu-client",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ubuntu-client","aria-hidden":"true"},"#"),(0,s.Uk)(" Ubuntu client")],-1),R=(0,s._)("p",null,"Install ClamAV on Ubuntu 20.04.",-1),L=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("client@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"apt-get"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"install"),(0,s.Uk)(" clamav clamav-daemon\n")])])],-1),M=(0,s._)("p",null,"Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well.",-1),N=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("client@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl stop clamav-daemon.service\nclient@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl stop clamav-freshclam.service\nclient@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl disable clamav-daemon.service\nclient@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl disable clamav-freshclam.service\n")])])],-1),q=(0,s._)("p",null,[(0,s.Uk)("Continue to configure the "),(0,s._)("code",null,"clamdscan"),(0,s.Uk)(" which share configuration file with the ClamAV daemon.")],-1),z=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("client@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"nano"),(0,s.Uk)(" /etc/clamav/clamd.conf\n")])])],-1),G=(0,s.uE)('<p>Comment the <code>LocalSocket /var/run/clamav/clamd.ctl</code> line and add the <code>TCPSocket 3310</code> along with the server <code>TCPAddr</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>\n<span class="token comment">#To reconfigure clamd run #dpkg-reconfigure clamav-daemon</span>\n<span class="token comment">#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details</span>\n<span class="token comment">#LocalSocket /var/run/clamav/clamd.ctl</span>\nFixStaleSocket <span class="token boolean">true</span>\nLocalSocketGroup clamav\nLocalSocketMode <span class="token number">666</span>\n<span class="token comment"># TemporaryDirectory is not set to its default /tmp here to make overriding</span>\n<span class="token comment"># the default with environment variables TMPDIR/TMP/TEMP possible</span>\nUser clamav\nTCPSocket <span class="token number">3310</span>\nTCPAddr <span class="token number">192.168</span>.0.1\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>When running a scan use the <code>multiscan</code> option to enable multihread reading. You can also set it to <code>quiet</code> if you&#39;re going to use the <code>log</code> option. You can also create a <code>file list</code> for all the directories to scan.</p>',3),O=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("client@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" clamdscan --multiscan --quiet --file-list"),(0,s._)("span",{class:"token operator"},"="),(0,s.Uk)(" --log"),(0,s._)("span",{class:"token operator"},"="),(0,s.Uk)("\n")])])],-1),Y=(0,s._)("h2",{id:"windows-client",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#windows-client","aria-hidden":"true"},"#"),(0,s.Uk)(" Windows client")],-1),B=(0,s.Uk)("First download the "),H={href:"http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe",target:"_blank",rel:"noopener noreferrer"},K=(0,s.Uk)("ClamAV Windows Installer"),Z=(0,s.Uk)(" (version 0.102.4). Right-click the executable file "),j=(0,s._)("code",null,"ClamAV-0.102.4.exe",-1),J=(0,s.Uk)(" and select "),Q=(0,s._)("code",null,"Run as Administrator",-1),X=(0,s.Uk)("."),nn=["src"],en=(0,s._)("p",null,"Select destination location.",-1),an=["src"],sn=(0,s._)("p",null,[(0,s.Uk)("Proceed to click the "),(0,s._)("code",null,"Install"),(0,s.Uk)(" button.")],-1),tn=["src"],ln=(0,s._)("p",null,[(0,s.Uk)("Once the installation is complete click the "),(0,s._)("code",null,"Finish"),(0,s.Uk)(" button.")],-1),on=["src"],cn=(0,s._)("p",null,[(0,s.Uk)("Run PowerShell as administrator and make sure you're in the correct path "),(0,s._)("code",null,"C:\\WINDOWS\\system32"),(0,s.Uk)(". Navigate to the ClamAV directory by entering "),(0,s._)("code",null,"cd 'C:\\Program Files\\ClamAV\\"),(0,s.Uk)(".")],-1),rn=["src"],un=(0,s._)("p",null,[(0,s.Uk)("Now copy the ClamAV daeomon configuration and rename it to "),(0,s._)("code",null,"clamd.conf"),(0,s.Uk)(" and open the file in WordPad.")],-1),pn=(0,s._)("div",{class:"language-powershell ext-powershell"},[(0,s._)("pre",{class:"language-powershell"},[(0,s._)("code",null,[(0,s.Uk)("client@windows:~"),(0,s._)("span",{class:"token function"},"PS"),(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"copy"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("\\conf_examples\\clamd"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("conf"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("sample "),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("\\clamd"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("conf\nclient@windows:~"),(0,s._)("span",{class:"token function"},"PS"),(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"write"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("exe "),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("\\clamd"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("conf\n")])])],-1),dn=["src"],mn=(0,s.uE)('<p>Comment the <code>Example</code> line and add the <code>TCPSocket</code> along with the server <code>TCPAddr</code> and save.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##</span>\n<span class="token comment">## Example config file for the Clam AV daemon</span>\n<span class="token comment">## Please read the clamd.conf(5) manual before editing this file.</span>\n<span class="token comment">##</span>\n\n<span class="token comment"># Comment or remove the line below.</span>\n<span class="token comment">#Example</span>\n\n<span class="token comment"># The daemon on Windows only supports unsecured TCP sockets.</span>\n<span class="token comment"># Due to security reasons make sure that your IP &amp; port is not</span>\n<span class="token comment"># exposed to the open internet.</span>\n\n<span class="token comment"># TCP port address.</span>\n<span class="token comment"># Default: no</span>\nTCPSocket <span class="token number">3310</span>\n\n<span class="token comment"># TCP address.</span>\n<span class="token comment"># By default we bind to INADDR_ANY, probably not wise.</span>\n<span class="token comment"># Enable the following to provide some degree of protection</span>\n<span class="token comment"># from the outside world. This option can be specified multiple</span>\n<span class="token comment"># times if you want to listen on multiple IPs. IPv6 is now supported.</span>\n<span class="token comment"># Default: no</span>\nTCPAddr <span class="token number">192.168</span>.0.1\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>You may fast test the configuration running a scan in the current directory.</p>',3),kn=["src"],bn=(0,s._)("p",null,[(0,s.Uk)("Running a more complete scan, like during the Ubuntu set up, use the "),(0,s._)("code",null,"multiscan"),(0,s.Uk)(" option to enable multithread reading. Set the output to "),(0,s._)("code",null,"quiet"),(0,s.Uk)(" in case you will use the "),(0,s._)("code",null,"log"),(0,s.Uk)(" option. As priorly mentioned you may also define a "),(0,s._)("code",null,"file list"),(0,s.Uk)(" of all the directories you wish to include in the scan.")],-1),hn=(0,s._)("div",{class:"language-powershell ext-powershell"},[(0,s._)("pre",{class:"language-powershell"},[(0,s._)("code",null,[(0,s.Uk)("client@windows:~"),(0,s._)("span",{class:"token function"},"PS"),(0,s.Uk)("$ "),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("\\clamdscan"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("exe  "),(0,s._)("span",{class:"token operator"},"--"),(0,s.Uk)("multiscan "),(0,s._)("span",{class:"token operator"},"--"),(0,s.Uk)("quiet "),(0,s._)("span",{class:"token operator"},"--"),(0,s.Uk)("file"),(0,s._)("span",{class:"token operator"},"-"),(0,s.Uk)("list= "),(0,s._)("span",{class:"token operator"},"--"),(0,s.Uk)("log=\n")])])],-1),_n=(0,s._)("h2",{id:"firewall-settings",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#firewall-settings","aria-hidden":"true"},"#"),(0,s.Uk)(" Firewall settings")],-1),gn=(0,s.Uk)("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),fn={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},vn=(0,s.Uk)("here"),Un=(0,s.Uk)("."),wn=(0,s.uE)('<details class="custom-container details"><summary>UFW Settings</summary><div class="language-bash ext-sh"><pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw default deny incoming\nserver@ubuntu:~$ <span class="token function">sudo</span> ufw default allow outgoing\nserver@ubuntu:~$ <span class="token function">sudo</span> ufw allow <span class="token number">22</span>\nserver@ubuntu:~$ <span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>\nCommand may disrupt existing <span class="token function">ssh</span> connections. Proceed with operation <span class="token punctuation">(</span>y<span class="token operator">|</span>n<span class="token punctuation">)</span>? y\nFirewall is active and enabled on system startup\n</code></pre></div></details>',1),yn=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" ufw allow proto tcp from "),(0,s._)("span",{class:"token number"},"192.168"),(0,s.Uk)(".0.2 to any port "),(0,s._)("span",{class:"token number"},"3310"),(0,s.Uk)(" comment "),(0,s._)("span",{class:"token string"},'"ClamAV client 1"'),(0,s.Uk)("\nserver@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" ufw allow proto tcp from "),(0,s._)("span",{class:"token number"},"192.168"),(0,s.Uk)(".0.3 to any port "),(0,s._)("span",{class:"token number"},"3310"),(0,s.Uk)(" comment "),(0,s._)("span",{class:"token string"},'"ClamAV client 2"'),(0,s.Uk)("\n")])])],-1),Cn=(0,s._)("p",null,"If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.",-1),An=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("server@ubuntu:~$ "),(0,s._)("span",{class:"token function"},"sudo"),(0,s.Uk)(" ufw allow proto tcp from "),(0,s._)("span",{class:"token number"},"192.168"),(0,s.Uk)(".0.0/24 to any port "),(0,s._)("span",{class:"token number"},"3310"),(0,s.Uk)(" comment "),(0,s._)("span",{class:"token string"},'"ClamAV clients"'),(0,s.Uk)("\n")])])],-1),Wn=(0,s._)("h2",{id:"troubleshooting",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),(0,s.Uk)(" Troubleshooting")],-1),xn=(0,s.Uk)("In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at "),Pn={href:"https://lists.clamav.net/mailman/listinfo/clamav-users",target:"_blank",rel:"noopener noreferrer"},Sn=(0,s.Uk)("ClamAV users"),Tn=(0,s.Uk)("."),Vn={id:"enterprise-solutions",tabindex:"-1"},$n=(0,s._)("a",{class:"header-anchor",href:"#enterprise-solutions","aria-hidden":"true"},"#",-1),En=(0,s.Uk)(" Enterprise solutions "),In=(0,s._)("h3",{id:"atomic-protector",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#atomic-protector","aria-hidden":"true"},"#"),(0,s.Uk)(" Atomic Protector")],-1),Fn=(0,s._)("p",null,"Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.",-1),Dn={href:"https://atomicorp.com/atomic-protector/",target:"_blank",rel:"noopener noreferrer"},Rn=(0,s.Uk)("Atomic Protector"),Ln={},Mn=(0,a(3744).Z)(Ln,[["render",function(n,e){const a=(0,s.up)("Badge"),Ln=(0,s.up)("OutboundLink"),Mn=(0,s.up)("CodeGroupItem"),Nn=(0,s.up)("CodeGroup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",t,[l,o,(0,s.Wm)(a,{text:"Rev 2",type:"tip"})]),i,(0,s._)("p",null,[(0,s._)("a",c,[r,(0,s.Wm)(Ln)]),u,(0,s._)("a",p,[d,(0,s.Wm)(Ln)])]),m,k,b,(0,s._)("p",null,[(0,s._)("a",h,[_,(0,s.Wm)(Ln)])]),g,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[f])),_:1})])),_:1}),v,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[U])),_:1})])),_:1}),w,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[y])),_:1})])),_:1}),C,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[A])),_:1})])),_:1}),W,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[x])),_:1})])),_:1}),P,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[S])),_:1})])),_:1}),T,V,$,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[E])),_:1})])),_:1}),I,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[F])),_:1})])),_:1}),D,R,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[L])),_:1})])),_:1}),M,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[N])),_:1})])),_:1}),q,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[z])),_:1})])),_:1}),G,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[O])),_:1})])),_:1}),Y,(0,s._)("p",null,[B,(0,s._)("a",H,[K,(0,s.Wm)(Ln)]),Z,j,J,Q,X]),(0,s._)("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client1.png",alt:"Windows 10 setup 1"},null,8,nn),en,(0,s._)("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client2.png",alt:"Windows 10 setup 2"},null,8,an),sn,(0,s._)("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client3.png",alt:"Windows 10 setup 3"},null,8,tn),ln,(0,s._)("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client4.png",alt:"Windows 10 setup 4"},null,8,on),cn,(0,s._)("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client5.png",alt:"Windows 10 setup 5"},null,8,rn),un,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Windows"},{default:(0,s.w5)((()=>[pn])),_:1})])),_:1}),(0,s._)("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client6.png",alt:"Windows 10 setup 6"},null,8,dn),mn,(0,s._)("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client7.png",alt:"Windows 10 setup 7"},null,8,kn),bn,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Windows"},{default:(0,s.w5)((()=>[hn])),_:1})])),_:1}),_n,(0,s._)("p",null,[gn,(0,s._)("a",fn,[vn,(0,s.Wm)(Ln)]),Un]),wn,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[yn])),_:1})])),_:1}),Cn,(0,s.Wm)(Nn,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Mn,{title:"Ubuntu"},{default:(0,s.w5)((()=>[An])),_:1})])),_:1}),Wn,(0,s._)("p",null,[xn,(0,s._)("a",Pn,[Sn,(0,s.Wm)(Ln)]),Tn]),(0,s._)("h2",Vn,[$n,En,(0,s.Wm)(a,{text:"non-sponsored",type:"tip"})]),In,Fn,(0,s._)("p",null,[(0,s._)("a",Dn,[Rn,(0,s.Wm)(Ln)])])],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[a,s]of e)n[a]=s;return n}}}]);