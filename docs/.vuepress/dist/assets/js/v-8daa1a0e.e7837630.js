"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[509],{464:(e,t,n)=>{n.r(t),n.d(t,{data:()=>r});const r={key:"v-8daa1a0e",path:"/",title:"Libellux: Up & Running",lang:"en-US",frontmatter:{lang:"en-US",title:"Libellux: Up & Running",description:"Description of this page"},excerpt:"",headers:[{level:2,title:"Credits",slug:"credits",children:[]},{level:2,title:"Table of contents",slug:"table-of-contents",children:[]},{level:2,title:"Feedback",slug:"feedback",children:[]},{level:2,title:"Road map",slug:"road-map",children:[]},{level:2,title:"Release notes",slug:"release-notes",children:[]}],filePathRelative:"README.md",git:{updatedTime:1631816299e3,contributors:[{name:"Libellux",email:"fredrik@libellux.com",commits:103}]}}},87:(e,t,n)=>{n.r(t),n.d(t,{default:()=>dn});var r=n(252);const l=(0,r._)("h1",{id:"introduction",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),(0,r.Uk)(" Introduction")],-1),o=(0,r.Uk)("Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called "),a={href:"https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("Zero Trust Network"),s=(0,r.Uk)(" using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity."),u=(0,r.uE)('<p><img src="/1500x500.png" alt="Banner"></p><div class="custom-container warning"><p class="custom-container-title">DISCLAIMER</p><p>It is understood that this documentation, and any configurations may contain errors and are provided for education purposes only. The documentation, and any configurations are provided &quot;as is&quot; without warranty of any kind, whether express, implied, statutory, or otherwise.</p></div><h2 id="credits" tabindex="-1"><a class="header-anchor" href="#credits" aria-hidden="true">#</a> Credits</h2>',3),c=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Role"),(0,r._)("th",null,"Names")])],-1),d=(0,r._)("td",null,"Lead Authors:",-1),h=(0,r.Uk)("Fredrik Hilmersson "),p={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},m=(0,r.Uk)("@libellux"),b=(0,r._)("td",null,"Contributors:",-1),k=(0,r.Uk)("Damir Kucic "),_={href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Uk)("@dkucic"),f=(0,r._)("td",null,"Reviewers:",-1),U=(0,r.Uk)("Scott Shinn "),w={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},x=(0,r.Uk)("@atomicturtle"),y=(0,r.Uk)(", Cornelius Kölbel "),v={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},W=(0,r.Uk)("@cornelinux"),S=(0,r.Uk)(", Adam Hilmersson "),A={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},R=(0,r.Uk)("@cnsta"),C=(0,r._)("td",null,"Supporters:",-1),T={href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"},N=(0,r.Uk)("HyperQube"),P=(0,r.Uk)(", "),I={href:"https://atomisystems.com/activepresenter/",target:"_blank",rel:"noopener noreferrer"},L=(0,r.Uk)("Atomi Systems"),M=(0,r.Uk)(", "),V={href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"},E=(0,r.Uk)("Mullvad VPN"),D=(0,r.uE)('<details class="custom-container details"><summary>Conventions</summary><table><thead><tr><th>Type</th><th>Convention</th><th>Description</th></tr></thead><tbody><tr><td>Environment</td><td>server@ubuntu</td><td>Suffix determine operating system</td></tr><tr><td>Server CLI</td><td>server@rocky</td><td>Commands executed from server command-line</td></tr><tr><td>Client CLI</td><td>client@ubuntu</td><td>Commands executed from client command-line</td></tr><tr><td>Server IP</td><td>192.168.0.1</td><td>Server IP address</td></tr><tr><td>Client IP</td><td>192.168.0.2</td><td>Client IP address</td></tr><tr><td>VPN server</td><td>192.168.8.1</td><td>WireGuard VPN server IP address</td></tr><tr><td>VPN client</td><td>192.168.8.2</td><td>WireGuard VPN client IP address</td></tr></tbody></table></details><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h4 id="part-1-zero-trust-network" tabindex="-1"><a class="header-anchor" href="#part-1-zero-trust-network" aria-hidden="true">#</a> PART 1: ZERO TRUST NETWORK</h4>',3),O=(0,r._)("a",{href:""},"1.0: WireGuard Secure VPN Tunnel",-1),G=(0,r.Uk)(),H=(0,r._)("a",{href:""},"1.1: Two-factor authentication w/ privacyIDEA and YubiKey",-1),F=(0,r.Uk)(),K=(0,r._)("a",{href:""},"1.2: Universal 2nd Factor with YubiKey",-1),z=(0,r.Uk)(),B=(0,r._)("h4",{id:"part-2-intrustion-detection-and-prevention",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#part-2-intrustion-detection-and-prevention","aria-hidden":"true"},"#"),(0,r.Uk)(" PART 2: INTRUSTION DETECTION AND PREVENTION")],-1),q=(0,r.Uk)("2.0: OSSEC Host Intrusion Detection System"),Y=(0,r.Uk)(),Z=(0,r._)("a",{href:""},"2.1: PSAD Intrusion Detection with Log Analysis",-1),j=(0,r.Uk)(),Q=(0,r._)("a",{href:""},"2.2: Greenbone Vulnerability Manager",-1),J=(0,r.Uk)(),X=(0,r.Uk)("2.3: Snort Network Intrusion Detection & Prevention System "),$=(0,r._)("a",{href:""},"2.4: ClamAV Antivirus Server",-1),ee=(0,r.Uk)(),te=(0,r._)("h4",{id:"part-3-monitoring-and-management",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#part-3-monitoring-and-management","aria-hidden":"true"},"#"),(0,r.Uk)(" PART 3: MONITORING AND MANAGEMENT")],-1),ne=(0,r.Uk)("3.0: AWX Ansible Tower "),re=(0,r._)("a",{href:""},"3.1: M/Monit System Monitoring",-1),le=(0,r.Uk)(),oe=(0,r._)("a",{href:""},"3.2: Performance Co-Pilot Grafana",-1),ae=(0,r.Uk)(),ie=(0,r._)("a",{href:""},"3.3: Rsyslog Log Processing",-1),se=(0,r.Uk)(),ue=(0,r._)("a",{href:""},"3.4: Graylog Centralized Log Management",-1),ce=(0,r.Uk)(),de=(0,r._)("h2",{id:"feedback",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),(0,r.Uk)(" Feedback")],-1),he={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},pe=(0,r.Uk)("Questions"),me=(0,r.Uk)(", "),be={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},ke=(0,r.Uk)("comments"),_e=(0,r.Uk)(", or "),ge={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},fe=(0,r.Uk)("problems"),Ue=(0,r.Uk)(" regarding this service? Create an issue "),we={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},xe=(0,r.Uk)("here"),ye=(0,r.Uk)(" or contact "),ve=(0,r._)("a",{href:"mailto:webmaster@libellux.com"},"webmaster@libellux.com",-1),We=(0,r.Uk)("."),Se={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},Ae=(0,r._)("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),Re=(0,r._)("h2",{id:"road-map",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#road-map","aria-hidden":"true"},"#"),(0,r.Uk)(" Road map")],-1),Ce=(0,r.Uk)("To follow the process and prioritization check out the project "),Te={href:"https://github.com/libellux/Libellux-Up-and-Running/projects/1",target:"_blank",rel:"noopener noreferrer"},Ne=(0,r.Uk)("road map"),Pe=(0,r.Uk)(". Feel free to create a "),Ie={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Le=(0,r.Uk)("feature request"),Me=(0,r.Uk)(" if there's any documentation or software you would like us to cover."),Ve=(0,r._)("h2",{id:"release-notes",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#release-notes","aria-hidden":"true"},"#"),(0,r.Uk)(" Release notes")],-1),Ee=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("Libellux: Up and Running changelog (1.1.0) "),(0,r._)("a",{href:"mailto:fredrik@libellux.com"},"fredrik@libellux.com")])],-1),De=(0,r._)("p",null,[(0,r._)("strong",null,"Release Maintainers")],-1),Oe=(0,r.Uk)("Fredrik Hilmersson "),Ge={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},He=(0,r.Uk)("@libellux"),Fe=(0,r._)("p",null,[(0,r._)("strong",null,"Contributors on this release")],-1),Ke=(0,r.Uk)("Cornelius Kölbel "),ze={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},Be=(0,r.Uk)("@cornelinux"),qe=(0,r._)("br",null,null,-1),Ye=(0,r.Uk)(" Scott Shinn "),Ze={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},je=(0,r.Uk)("@atomicturtle"),Qe=(0,r._)("br",null,null,-1),Je=(0,r.Uk)(" Adam Hilmersson "),Xe={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},$e=(0,r.Uk)("@cnst"),et=(0,r._)("p",null,[(0,r._)("strong",null,"Release notes")],-1),tt=(0,r._)("p",null,"Special thanks on this release go out to:",-1),nt={href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"},rt=(0,r.Uk)("HyperQube"),lt=(0,r.Uk)(" for providing their great software to replicate entire cloud networks with the click of a button."),ot={href:"https://atomisystems.com/",target:"_blank",rel:"noopener noreferrer"},at=(0,r.Uk)("Atomi Systems"),it=(0,r.Uk)(" for giving access to their powerful screen recording software ActivePresenter."),st={href:"https://mullvad.net/en",target:"_blank",rel:"noopener noreferrer"},ut=(0,r.Uk)("Mullvad VPN"),ct=(0,r.Uk)(" letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy."),dt=(0,r.Uk)("Cornelius Kölbel "),ht={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},pt=(0,r.Uk)("@cornelinux"),mt=(0,r.Uk)(" from "),bt={href:"https://netknights.it/en/",target:"_blank",rel:"noopener noreferrer"},kt=(0,r.Uk)("NetKnights"),_t=(0,r.Uk)("."),gt=(0,r._)("p",null,[(0,r.Uk)("This is the first "),(0,r._)("em",null,"minor"),(0,r.Uk)(" release of Libellux: Up and Running. Where we start combining the services to enhance the security in the Zero Trust Network. We added documentation how-to set up a virtual private network (VPN) using WireGuard. privacyIDEA will act as our central authentication server to both enforce two-factor authentication (using YubiKey 5 NFC) but also to apply an role-based access control (RBAC) approach. We also added a new section on how-to set up a server/client relationship with ClamAV Antivirus. Additionally we added the possiblity to comment using Gitalk.")],-1),ft=(0,r._)("p",null,"What's New:",-1),Ut=(0,r._)("p",null,[(0,r.Uk)("Two-factor authentiction w/ PrivacyIDEA FreeRADIUS plugin and YubiKey 5 NFC"),(0,r._)("br"),(0,r.Uk)(" Greenbone Vulnerability Manager (GVM) revision 5 w/ update for latest GVM release (21.04)"),(0,r._)("br"),(0,r.Uk)(" WireGuard Secure VPN Tunnel"),(0,r._)("br"),(0,r.Uk)(" ClamAV Antivirus Server"),(0,r._)("br"),(0,r.Uk)(" Scheduled jobs for GVM 21.04 to keep community feed up-to-date"),(0,r._)("br"),(0,r.Uk)(" Comments with Gitalk")],-1),wt={class:"custom-container details"},xt=(0,r._)("summary",null,"Prior releases",-1),yt=(0,r._)("p",null,[(0,r._)("strong",null,[(0,r.Uk)("Libellux: Up and Running changelog (1.0.1) "),(0,r._)("a",{href:"mailto:fredrik@libellux.com"},"fredrik@libellux.com")])],-1),vt=(0,r._)("p",null,[(0,r._)("strong",null,"Release Maintainers")],-1),Wt=(0,r.Uk)("Fredrik Hilmersson "),St={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},At=(0,r.Uk)("@libellux"),Rt=(0,r._)("p",null,[(0,r._)("strong",null,"Contributors on this release")],-1),Ct=(0,r.Uk)("Scott Shinn "),Tt={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},Nt=(0,r.Uk)("@atomicturtle"),Pt=(0,r._)("br",null,null,-1),It=(0,r.Uk)(" Adam Hilmersson "),Lt={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},Mt=(0,r.Uk)("@cnsta"),Vt=(0,r.uE)('<p><strong>Release notes</strong></p><p>The second release of Libellux: Up and Running mostly contain updates to already existing chapters. There is a few new additions to each chapter e.g. Agentless monitoring and Windows Server 2019 agent installation for OSSEC. The OpenVAS chapter has also been revised and updated with new features such as basic vulnerability scans to give a first hands-on experience. We&#39;ve also completed the first revision for M/Monit System Monitoring.</p><p>What&#39;s New:</p><p>M/Monit System Monitoring (3.7.5) with Monit (5.27.0)<br> Agentless monitoring chapter to OSSEC Host Intrusion Detection (3.6.0)<br> Windows Server 2019 agent installation (OSSEC 3.6.0)<br> Basic authenticated and unauthenticated scan to OpenVAS Vulnerability Scanner (OpenVAS 20.08)</p><hr><p><strong>Libellux: Up and Running changelog (1.0.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p><p><strong>Release Maintainers</strong></p>',7),Et=(0,r.Uk)("Fredrik Hilmersson "),Dt={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},Ot=(0,r.Uk)("@libellux"),Gt=(0,r._)("p",null,[(0,r._)("strong",null,"Contributors on this release")],-1),Ht=(0,r.Uk)("Damir Kucic "),Ft={href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"},Kt=(0,r.Uk)("@dkucic"),zt=(0,r._)("br",null,null,-1),Bt=(0,r.Uk)(" Scott Shinn "),qt={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},Yt=(0,r.Uk)("@atomicturtle"),Zt=(0,r._)("br",null,null,-1),jt=(0,r.Uk)(" Adam Hilmersson "),Qt={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},Jt=(0,r.Uk)("@cnsta"),Xt=(0,r._)("br",null,null,-1),$t=(0,r.Uk)(" Zeny Palac "),en={href:"https://twitter.com/doczenzen",target:"_blank",rel:"noopener noreferrer"},tn=(0,r.Uk)("@doczenzen"),nn=(0,r._)("br",null,null,-1),rn=(0,r.Uk)(" Falk "),ln={href:"https://github.com/falkowich",target:"_blank",rel:"noopener noreferrer"},on=(0,r.Uk)("@falkowich"),an=(0,r._)("p",null,[(0,r._)("strong",null,"Release notes")],-1),sn=(0,r._)("p",null,"This is the first release of Libellux: Up and Running. The initial release contain documentation and configuration for the software specified below (see What's New). Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.",-1),un=(0,r._)("p",null,"What's New:",-1),cn=(0,r._)("p",null,[(0,r.Uk)("OSSEC Host Intrusion Detection (3.6.0)"),(0,r._)("br"),(0,r.Uk)(" PSAD Intrusion Detection (2.4.6)"),(0,r._)("br"),(0,r.Uk)(" OpenVAS Vulnerability Scanner (OpenVAS 20.08, Atomicorp 20.08)")],-1),dn={render:function(e,t){const n=(0,r.up)("OutboundLink"),dn=(0,r.up)("Badge"),hn=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r._)("p",null,[o,(0,r._)("a",a,[i,(0,r.Wm)(n)]),s]),u,(0,r._)("table",null,[c,(0,r._)("tbody",null,[(0,r._)("tr",null,[d,(0,r._)("td",null,[h,(0,r._)("a",p,[m,(0,r.Wm)(n)])])]),(0,r._)("tr",null,[b,(0,r._)("td",null,[k,(0,r._)("a",_,[g,(0,r.Wm)(n)])])]),(0,r._)("tr",null,[f,(0,r._)("td",null,[U,(0,r._)("a",w,[x,(0,r.Wm)(n)]),y,(0,r._)("a",v,[W,(0,r.Wm)(n)]),S,(0,r._)("a",A,[R,(0,r.Wm)(n)])])]),(0,r._)("tr",null,[C,(0,r._)("td",null,[(0,r._)("a",T,[N,(0,r.Wm)(n)]),P,(0,r._)("a",I,[L,(0,r.Wm)(n)]),M,(0,r._)("a",V,[E,(0,r.Wm)(n)])])])])]),D,(0,r._)("ul",null,[(0,r._)("li",null,[O,G,(0,r.Wm)(dn,{text:"stable",type:"tip"})]),(0,r._)("li",null,[H,F,(0,r.Wm)(dn,{text:"stable",type:"tip"})]),(0,r._)("li",null,[K,z,(0,r.Wm)(dn,{text:"incomplete",type:"warning"})])]),B,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(hn,{to:"/ossec/"},{default:(0,r.w5)((()=>[q])),_:1}),Y,(0,r.Wm)(dn,{text:"stable",type:"tip"})]),(0,r._)("li",null,[Z,j,(0,r.Wm)(dn,{text:"stable",type:"tip"})]),(0,r._)("li",null,[Q,J,(0,r.Wm)(dn,{text:"stable",type:"default"})]),(0,r._)("li",null,[X,(0,r.Wm)(dn,{text:"TBA",type:"warning"})]),(0,r._)("li",null,[$,ee,(0,r.Wm)(dn,{text:"stable",type:"tip"})])]),te,(0,r._)("ul",null,[(0,r._)("li",null,[ne,(0,r.Wm)(dn,{text:"TBA",type:"warning"})]),(0,r._)("li",null,[re,le,(0,r.Wm)(dn,{text:"stable",type:"tip"})]),(0,r._)("li",null,[oe,ae,(0,r.Wm)(dn,{text:"incomplete",type:"warning"})]),(0,r._)("li",null,[ie,se,(0,r.Wm)(dn,{text:"incomplete",type:"warning"})]),(0,r._)("li",null,[ue,ce,(0,r.Wm)(dn,{text:"incomplete",type:"warning"})])]),de,(0,r._)("p",null,[(0,r._)("a",he,[pe,(0,r.Wm)(n)]),me,(0,r._)("a",be,[ke,(0,r.Wm)(n)]),_e,(0,r._)("a",ge,[fe,(0,r.Wm)(n)]),Ue,(0,r._)("a",we,[xe,(0,r.Wm)(n)]),ye,ve,We]),(0,r._)("p",null,[(0,r._)("a",Se,[Ae,(0,r.Wm)(n)])]),Re,(0,r._)("p",null,[Ce,(0,r._)("a",Te,[Ne,(0,r.Wm)(n)]),Pe,(0,r._)("a",Ie,[Le,(0,r.Wm)(n)]),Me]),Ve,Ee,De,(0,r._)("p",null,[Oe,(0,r._)("a",Ge,[He,(0,r.Wm)(n)])]),Fe,(0,r._)("p",null,[Ke,(0,r._)("a",ze,[Be,(0,r.Wm)(n)]),qe,Ye,(0,r._)("a",Ze,[je,(0,r.Wm)(n)]),Qe,Je,(0,r._)("a",Xe,[$e,(0,r.Wm)(n)])]),et,tt,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",nt,[rt,(0,r.Wm)(n)]),lt]),(0,r._)("li",null,[(0,r._)("a",ot,[at,(0,r.Wm)(n)]),it]),(0,r._)("li",null,[(0,r._)("a",st,[ut,(0,r.Wm)(n)]),ct]),(0,r._)("li",null,[dt,(0,r._)("a",ht,[pt,(0,r.Wm)(n)]),mt,(0,r._)("a",bt,[kt,(0,r.Wm)(n)]),_t])]),gt,ft,Ut,(0,r._)("details",wt,[xt,yt,vt,(0,r._)("p",null,[Wt,(0,r._)("a",St,[At,(0,r.Wm)(n)])]),Rt,(0,r._)("p",null,[Ct,(0,r._)("a",Tt,[Nt,(0,r.Wm)(n)]),Pt,It,(0,r._)("a",Lt,[Mt,(0,r.Wm)(n)])]),Vt,(0,r._)("p",null,[Et,(0,r._)("a",Dt,[Ot,(0,r.Wm)(n)])]),Gt,(0,r._)("p",null,[Ht,(0,r._)("a",Ft,[Kt,(0,r.Wm)(n)]),zt,Bt,(0,r._)("a",qt,[Yt,(0,r.Wm)(n)]),Zt,jt,(0,r._)("a",Qt,[Jt,(0,r.Wm)(n)]),Xt,$t,(0,r._)("a",en,[tn,(0,r.Wm)(n)]),nn,rn,(0,r._)("a",ln,[on,(0,r.Wm)(n)])]),an,sn,un,cn])],64)}}}}]);