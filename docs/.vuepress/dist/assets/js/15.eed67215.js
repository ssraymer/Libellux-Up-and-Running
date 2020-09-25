(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{393:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"m-monit-system-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-system-monitoring"}},[t._v("#")]),t._v(" M/Monit System Monitoring")]),t._v(" "),a("TagLinks"),t._v(" "),a("p",[t._v("Monit is a small popular Open Source utility for managing and monitoring Unix systems. M/Monit builds on Monit's capabilities and provides monitoring and management of all your Monit enabled hosts via a modern, clean and well designed user interface which also works on mobile devices.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mmonit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("M/Monit website"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://mmonit.com/monit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monit website"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://bitbucket.org/tildeslash/monit/src/master/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Setup and configuration has been tested on following OS with version:")]),t._v(" "),a("h3",{attrs:{id:"m-monit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit"}},[t._v("#")]),t._v(" M/Monit")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu- 16.04, 18.04, 20.04")]),t._v(" "),a("li",[t._v("3.6.0 -> 3.7.4")])]),t._v(" "),a("h3",{attrs:{id:"monit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monit"}},[t._v("#")]),t._v(" Monit")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu- 16.04, 18.04, 20.04")]),t._v(" "),a("li",[t._v("5.16.0 -> 5.27.0")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("M/Monit is a non-free software to montior and manage all Monit enabled hosts. 30 days free trial.")])]),t._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/mmonit/config/server.xml",target:"_blank",rel:"noopener noreferrer"}},[t._v("server.xml"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("Dependancies when building Monit from source.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("zlib1g-dev")])]),t._v(" "),a("li",[a("code",[t._v("libssl-dev")])])]),t._v(" "),a("h2",{attrs:{id:"m-monit-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-installation"}},[t._v("#")]),t._v(" M/Monit Installation")]),t._v(" "),a("p",[t._v("For additional information see reference "),a("a",{attrs:{href:"https://mmonit.com/documentation/mmonit_manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("M/Monit documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To download the latest version of M/Monit visit the "),a("a",{attrs:{href:"https://mmonit.com/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ cd /opt/\nserver@ubuntu:~$ wget https://mmonit.com/dist/mmonit-3.7.4_1-linux-x64.tar.gz\n")])])]),a("p",[t._v("Proceed to unpack the downloaded tar gzip package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ tar -zxvf mmonit-3.7.4_1-linux-x64.tar.gz\nserver@ubuntu:~$ rm mmonit-3.7.4_1-linux-x64.tar.gz\nserver@ubuntu:~$ mv /opt/mmonit-3.7.3-linux-x64 /opt/mmonit\n")])])]),a("p",[t._v("Now you can visit M/Monit at "),a("code",[t._v("http://192.168.0.1:8080")]),t._v(" if executing the command "),a("code",[t._v("sudo ./mmonit")]),t._v(" from "),a("code",[t._v("/opt/mmonit/bin/")]),t._v(" (Dont forget to check "),a("a",{attrs:{href:"#firewall-settings"}},[t._v("Firewall settings")]),t._v("). However, we strongly recommend to run M/Monit with TLS support.")]),t._v(" "),a("h3",{attrs:{id:"enable-tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-tls"}},[t._v("#")]),t._v(" Enable TLS")]),t._v(" "),a("p",[t._v("To enable M/Monit to run with TLS comment out the port 8080 connector and uncomment the SSL/TLS connector to listen on port 8443. Proceed to update the host section and define the server IP address along with the certificate path.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ nano /opt/mmonit/conf/server.xml\n")])])]),a("div",{staticClass:"language-xml extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--\n        <Connector address="*" port="8080" processors="10" />\n        --\x3e')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Define a SSL/TLS HTTP/1.1 Connector on port 8443 --\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Connector")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scheme")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8443"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("processors")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("secure")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n            Define the default virtual host which name must match the\n            Engine defaultHost attribute\n        --\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("appBase")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("192.168.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("certificate")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("conf/mmonit.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"add-m-monit-to-systemd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-m-monit-to-systemd"}},[t._v("#")]),t._v(" Add M/Monit to systemd")]),t._v(" "),a("p",[t._v("To simplify the process to start and stop M/Monit add it to the systemd. First create a mmonit.service file, paste the below and save.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo nano /etc/systemd/system/mmonit.service\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nDescription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Easy, proactive monitoring of Unix systems, network and cloud services\nAfter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" network.target\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https://mmonit.com/documentation/ \n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("process\nExecStart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /opt/mmonit/bin/mmonit -i\nExecStop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /opt/mmonit/bin/mmonit stop\nPIDFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /opt/mmonit/logs/mmonit.pid\nRestart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on-abnormal\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nWantedBy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multi-user.target\n")])])]),a("p",[t._v("Next reload the systemd daemon, enable our newly configured M/Monit service and then start it.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo systemctl daemon-reload\nserver@ubuntu:~$ sudo systemctl enable mmonit\nserver@ubuntu:~$ sudo systemctl start mmonit\n")])])]),a("p",[t._v("Go to your browser and visit "),a("code",[t._v("https://192.168.0.1:8443")]),t._v(". Login using the default credentials user "),a("code",[t._v("admin")]),t._v(" with the default password "),a("code",[t._v("swordfish")]),t._v(".")]),t._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/mmonit/mmonit_login.png",alt:"mmonit login"}}),t._v(" "),a("p",[t._v("Click the "),a("strong",[t._v("Admin")]),t._v(" tab select "),a("strong",[t._v("Users")]),t._v(" and edit or add a new user then delete the Administrator account to overwrite the default credentials.")]),t._v(" "),a("h2",{attrs:{id:"monit-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monit-installation"}},[t._v("#")]),t._v(" Monit Installation")]),t._v(" "),a("p",[t._v("To install the latest version of Monit as an agent for M/Monit enter the commands below.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("client@ubuntu:~$ wget https://bitbucket.org/tildeslash/monit/downloads/monit-5.27.0.tar.gz\nclient@ubuntu:~$ tar -zxvf monit-5.27.0.tar.gz\nclient@ubuntu:~$ cd monit-5.27.0/\nclient@ubuntu:~$ sudo ./configure --without-pam\nclient@ubuntu:~$ sudo make && sudo make install\nclient@ubuntu:~$ sudo cp monitrc /usr/local/etc/\nclient@ubuntu:~$ cd /usr/local/etc\nclient@ubuntu:~$ sudo cp monitrc monitrc_bak\nclient@ubuntu:~$ sudo nano monitrc\nclient@ubuntu:~$ cd /usr/local/\nclient@ubuntu:~$ sudo ./bin/monit\n")])])]),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("client@ubuntu:~$ sudo openssl req -new -x509 -days 365 -nodes -out /etc/monit/monit.pem -keyout /etc/monit/monit.pem\nclient@ubuntu:~$ sudo chmod 700 /etc/monit/monit.pem\n")])])]),a("h2",{attrs:{id:"firewall-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[t._v("#")]),t._v(" Firewall settings")]),t._v(" "),a("p",[t._v("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),a("a",{attrs:{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("UFW Settings")]),t._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("INFO")]),t._v(" "),a("p",[t._v("For non SSL/TLS allow port 8080.")])]),t._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('server@ubuntu:~$ sudo ufw allow 8443 comment "M/Monit"\n')])])]),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('client@ubuntu:~$ sudo ufw allow from 192.168.0.1 to any port 2812 comment "M/Monit"\n')])])]),a("h2",{attrs:{id:"m-monit-behind-nginx-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-behind-nginx-proxy"}},[t._v("#")]),t._v(" M/Monit behind NGINX Proxy")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host             "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   REMOTE_HOST      "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("FORWARDED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROTOCOL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_cookie_path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"slack-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slack-notifications"}},[t._v("#")]),t._v(" Slack notifications")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("ruby "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v('e "\n    '),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net/https'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),t._v("\n    uri "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://hooks.slack.com/services/XXXXXXXXX/YYYYYYYYY/ZZZZZZZZZZZZZZZZZZZZZZZZ'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("use_ssl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request_uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(' \\"channel\\"  '),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(' \\"'),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#general\\", \\"username\\" => \\"mmonit\\", \\"text\\" => \\"[#{ENV[\'MONIT_HOST\']}] #{ENV[\'MONIT_SERVICE\']} - #{ENV[\'MONIT_DESCRIPTION\']}\\" }.to_json')]),t._v("\n    response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    puts response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v('body\n"\n')])])]),a("p",[t._v("If you do not use M/Monit you can also configure the individual Monit instance to create Slack notifications. Read more at "),a("a",{attrs:{href:"https://mmonit.com/wiki/MMonit/SlackNotification",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tideslash Wiki"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[t._v("#")]),t._v(" Upgrading")]),t._v(" "),a("p",[t._v("Upgrading M/Monit without overwriting configuration files and databases can be done using the built-in upgrade command.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /usr/local/\n$ wget https://mmonit.com/dist/mmonit-3.7.0-linux-x64.tar.gz\n$ tar -zxvf mmonit-3.7.0-linux-x64.tar.gz\n$ cd /usr/local/mmonit-3.6.2/bin/\n$ sudo ./mmonit stop\n$ /usr/local/mmonit-3.7.0/upgrade/upgrade -p /usr/local/mmonit-3.6.2/\n$ cd /usr/local/mmonit-3.7.0/bin/\n$ sudo ./mmonit\n")])])]),a("h2",{attrs:{id:"command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[t._v("#")]),t._v(" Command-line")]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.libellux.com/openvas/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenVAS"),a("OutboundLink")],1),t._v(" reports monit to be using weak ciphers accepted through TLS1.0,1.1,1.2 protocol. Add following lines within the ssl section.")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("with "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pemfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TLSv12\n    ciphers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Resolving the issue if libcrypto.so.1.0.x been removed using the auto remove/clean command, is to reinstall the libssl1.0.x and libssl-dev package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo apt-get install libssl1.0.x libssl-dev --reinstall\n")])])]),a("p",[t._v("If package you get configure error: libz not found, solve that by installing the zlib1g-dev package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo apt-get install zlib1g-dev\n")])])]),a("p",[t._v("In case you get the configure error: Couldn’t find your SSL header files. Proceed with install the libssl-dev package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server@ubuntu:~$ sudo apt-get install libssl-dev\n")])])]),a("h2",{attrs:{id:"enterprise-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[t._v("#")]),t._v(" Enterprise solutions "),a("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),t._v(" "),a("h3",{attrs:{id:"m-monit-enterprise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-enterprise"}},[t._v("#")]),t._v(" M/Monit Enterprise")]),t._v(" "),a("p",[t._v("The M/Monit Enterprise License is a perpetual license and allows you to install and run an unlimited number of M/Monit instances for monitoring an unlimited number of hosts in-house.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mmonit.com/shop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("M/Monit"),a("OutboundLink")],1)]),t._v(" "),a("social-share")],1)}),[],!1,null,null,null);s.default=e.exports}}]);