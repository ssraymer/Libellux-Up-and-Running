(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{391:function(a,t,e){"use strict";e.r(t);var s=e(11),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"clamav-antivirus-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clamav-antivirus-server"}},[a._v("#")]),a._v(" ClamAV Antivirus Server")]),a._v(" "),e("TagLinks"),a._v(" "),e("p",[a._v("ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.clamav.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ClamAV website"),e("OutboundLink")],1),a._v(" "),e("a",{attrs:{href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("Source code"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("Setup and configuration has been tested on following OS with version:")]),a._v(" "),e("ul",[e("li",[a._v("Ubuntu- 18.04, 20.04, Windows Server 2019")]),a._v(" "),e("li",[a._v("ClamAV- 0.102.4")])]),a._v(" "),e("h2",{attrs:{id:"configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[a._v("#")]),a._v(" Configuration files")]),a._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[a._v("#")]),a._v(" Prerequisites")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("net-tools")]),a._v(" (optional)")])]),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation "),e("Badge",{attrs:{text:"Rev 1",type:"default"}})],1),a._v(" "),e("ul",[e("li",[a._v("Set up description")])]),a._v(" "),e("h2",{attrs:{id:"clamav-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clamav-server"}},[a._v("#")]),a._v(" ClamAV server")]),a._v(" "),e("p",[a._v("First download the ClamAV scanner and the ClamAV daemon.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ sudo apt-get install clamav clamav-daemon\n")])])]),e("p",[a._v("Proceed to stop freshclam the automatic database update tool for ClamAV.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ sudo systemctl stop clamav-freshclam\n")])])]),e("p",[a._v("Next run freshclam to update to the latest definition database.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ sudo freshclam\n")])])]),e("p",[a._v("Once you've ran the freshclam command you can check the log "),e("code",[a._v("/var/log/clamav/freshclam.log")]),a._v(" for the current status.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ cat /var/log/clamav/freshclam.log\nSat Apr 10 17:51:37 2021 -> daily.cvd database is up to date (version: 26136, sigs: 3969743, f-level: 63, builder: raynman)\nSat Apr 10 17:51:37 2021 -> main.cvd database is up to date (version: 59, sigs: 4564902, f-level: 60, builder: sigmgr)\nSat Apr 10 17:51:37 2021 -> bytecode.cvd database is up to date (version: 333, sigs: 92, f-level: 63, builder: awillia2)\n")])])]),e("p",[a._v("Now we'll update our ClamAV daemon configuration to make our server listen to TCP socket 3310.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ sudo nano /etc/clamav/clamd.conf\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Automatically Generated by clamav-daemon postinst")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#To reconfigure clamd run #dpkg-reconfigure clamav-daemon")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details")]),a._v("\nLocalSocket /var/run/clamav/clamd.ctl\nFixStaleSocket "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\nLocalSocketGroup clamav\nLocalSocketMode "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("666")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# TemporaryDirectory is not set to its default /tmp here to make overriding")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# the default with environment variables TMPDIR/TMP/TEMP possible")]),a._v("\nUser clamav\nTCPSocket "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3310")]),a._v("\n")])])]),e("p",[a._v("Restart ClamAV to apply the new changes.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ sudo systemctl restart clamav-daemon.service\n")])])]),e("p",[a._v("To confirm that ClamAV listen to TCP port 3310 run the command below (requires "),e("code",[a._v("net-tools")]),a._v(").")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('server@ubuntu:~$ netstat -lnp | grep -E "(clam|3310)"\n(Not all processes could be identified, non-owned process info\n will not be shown, you would have to be root to see it all.)\ntcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -\ntcp6       0      0 :::3310                 :::*                    LISTEN      -\nunix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.ctl\n')])])]),e("p",[a._v("Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the "),e("a",{attrs:{href:"#firewall-settings"}},[a._v("Firewall settings")]),a._v(" section for more information.")]),a._v(" "),e("ul",[e("li",[a._v("clamdtop")])]),a._v(" "),e("h2",{attrs:{id:"ubuntu-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-client"}},[a._v("#")]),a._v(" Ubuntu client")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("client@ubuntu:~$ sudo apt-get install clamav clamav-daemon\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("client@ubuntu:~$ sudo systemctl stop clamav-daemon.service\nclient@ubuntu:~$ sudo systemctl stop clamav-freshclam.service\nclient@ubuntu:~$ sudo systemctl disable clamav-daemon.service\nclient@ubuntu:~$ sudo systemctl disable clamav-freshclam.service\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("client@ubuntu:~$ sudo nano /etc/clamav/clamd.conf\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Automatically Generated by clamav-daemon postinst")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#To reconfigure clamd run #dpkg-reconfigure clamav-daemon")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#LocalSocket /var/run/clamav/clamd.ctl")]),a._v("\nFixStaleSocket "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\nLocalSocketGroup clamav\nLocalSocketMode "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("666")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# TemporaryDirectory is not set to its default /tmp here to make overriding")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# the default with environment variables TMPDIR/TMP/TEMP possible")]),a._v("\nUser clamav\nTCPSocket "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3310")]),a._v("\nTCPAddr "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.1\n")])])]),e("h2",{attrs:{id:"windows-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-client"}},[a._v("#")]),a._v(" Windows client")]),a._v(" "),e("p",[a._v("First download the ClamAV Windows installer "),e("code",[a._v("http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe")]),a._v(". Right-click the executable file "),e("code",[a._v("ClamAV-0.102.4.exe")]),a._v(" and select "),e("code",[a._v("Run as Administrator")]),a._v(".")]),a._v(" "),e("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/clamav/win10client1.png",alt:"Windows 10 setup 1"}}),a._v(" "),e("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/clamav/win10client2.png",alt:"Windows 10 setup 2"}}),a._v(" "),e("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/clamav/win10client3.png",alt:"Windows 10 setup 3"}}),a._v(" "),e("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/clamav/win10client4.png",alt:"Windows 10 setup 4"}}),a._v(" "),e("h2",{attrs:{id:"firewall-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[a._v("#")]),a._v(" Firewall settings")]),a._v(" "),e("p",[a._v("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),e("a",{attrs:{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("UFW Settings")]),a._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n")])])])]),a._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('server@ubuntu:~$ sudo ufw allow proto tcp from 192.168.0.2 to any port 3310 comment "ClamAV client"\n')])])]),e("h2",{attrs:{id:"scheduled-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-jobs"}},[a._v("#")]),a._v(" Scheduled jobs")]),a._v(" "),e("p",[a._v("To keep the ClamAV definition database up-to-date create a scheduled job to run e.g. once everyday (at 00:00).")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("server@ubuntu:~$ sudo -i\nroot@ubuntu:~$ crontab -e\n#\n# m h  dom mon dow   command\n0 0 * * * freshclam\n")])])]),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),e("p",[a._v("In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at "),e("a",{attrs:{href:"https://lists.clamav.net/mailman/listinfo/clamav-users",target:"_blank",rel:"noopener noreferrer"}},[a._v("ClamAV users"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"enterprise-solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[a._v("#")]),a._v(" Enterprise solutions "),e("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),a._v(" "),e("h3",{attrs:{id:"atomic-protector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#atomic-protector"}},[a._v("#")]),a._v(" Atomic Protector "),e("Badge",{attrs:{text:"non-affiliate",type:"default"}})],1),a._v(" "),e("p",[a._v("Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://atomicorp.com/atomic-protector/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Atomic Protector"),e("OutboundLink")],1)]),a._v(" "),e("social-share")],1)}),[],!1,null,null,null);t.default=r.exports}}]);