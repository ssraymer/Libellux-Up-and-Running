(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{400:function(e,t,a){"use strict";a.r(t);var r=a(11),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"two-factor-authentication-w-privacyidea-and-yubikey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#two-factor-authentication-w-privacyidea-and-yubikey"}},[e._v("#")]),e._v(" Two-factor authentication w/ privacyIDEA and YubiKey")]),e._v(" "),a("TagLinks"),e._v(" "),a("p",[e._v("privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two-factor authentication.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.privacyidea.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacyIDEA website"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/privacyidea/privacyidea",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yubico website"),a("OutboundLink")],1),e._v(" "),a("Badge",{attrs:{text:"affiliate links",type:"warning"}})],1),e._v(" "),a("p",[e._v("Setup and configuration has been tested on the following operating systems:")]),e._v(" "),a("ul",[a("li",[e._v("Ubuntu 20.04")]),e._v(" "),a("li",[e._v("privacyIDEA 3.5.2")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1),e._v(" (optional)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.yubico.com/support/download/yubikey-personalization-tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey Personalization Tool"),a("OutboundLink")],1),e._v(" (optional)")])]),e._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration files")]),e._v(" "),a("h2",{attrs:{id:"install-community-edition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-community-edition"}},[e._v("#")]),e._v(" Install community edition "),a("Badge",{attrs:{text:"Rev 1",type:"default"}})],1),e._v(" "),a("p",[e._v("We will use privacyIDEA and their FreeRADIUS plugin together with "),a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1),e._v(" (from Yubico) to enforce two-factor authentication and apply an role-based access control approach (RBAC). We will simplify the user accounting by fetching the users from the local "),a("code",[e._v("/etc/passwd")]),e._v(" file and use it as the privacyIDEA resolver (instead of e.g. LDAP, SQL. You can read more about resolvers "),a("a",{attrs:{href:"https://privacyidea.readthedocs.io/en/latest/configuration/useridresolvers.html#useridresolvers",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("). To get an hands-on experience we will use the privacyIDEA authentication server to access the "),a("RouterLink",{attrs:{to:"/openvas/"}},[e._v("Greenbone Vulnerability Manager's")]),e._v(" user interface.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("INFO")]),e._v(" "),a("p",[e._v("This is the first revision for privacyIDEA. We will write more about the different modular options e.g. LDAP as resolver in future releases. If there's any particular configuration you would like us to cover feel free to create a new "),a("a",{attrs:{href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feature request"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("To get started download the signed key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ wget https://lancelot.netknights.it/NetKnights-Release.asc\n")])])]),a("p",[e._v("Next import the signed key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo gpg --import --import-options show-only --with-fingerprint NetKnights-Release.asc\npub rsa4096 2017-05-16  NetKnights GmbH <release@netknights.it>\nKey fingerprint = 0940 4ABB EDB3 586D EDE4  AD22 00F7 0D62 AE25 0082\n")])])]),a("p",[e._v("Continue by adding the key to our system.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo apt-key add NetKnights-Release.asc\nOK\n")])])]),a("p",[e._v("Now we need to add the repository for the specific release (in this case Ubuntu 20.04).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo add-apt-repository http://lancelot.netknights.it/community/focal/stable\nserver@ubuntu:~$ sudo apt-get update\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("INFO")]),e._v(" "),a("p",[e._v("If you prefer to use the nginx version you can install "),a("code",[e._v("apt-get privacyidea-nginx")])])]),e._v(" "),a("p",[e._v("Once we updated the package manager we can install PrivacyIDEA.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo apt-get update\nserver@ubuntu:~$ sudo apt-get install privacyidea-apache2\n             _                    _______  _______\n   ___  ____(_)  _____ _______ __/  _/ _ \\/ __/ _ |\n  / _ \\/ __/ / |/ / _ `/ __/ // // // // / _// __ |\n / .__/_/ /_/|___/\\_,_/\\__/\\_, /___/____/___/_/ |_|\n/_/                       /___/\n\nRunning online\n")])])]),a("p",[e._v("Let's create the administration account.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo pi-manage admin add admin -e admin@localhost\nAdmin admin was registered successfully.\n")])])]),a("p",[e._v("Once you've added the administrator account and followed the "),a("a",{attrs:{href:"#firewall-settings"}},[e._v("firewall settings")]),e._v(" you should be able to reach the web interface from "),a("code",[e._v("https://192.168.0.1")]),e._v(" and login as the admin user with your password.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea_login.png",alt:"PrivacyIDEA login"}}),e._v(" "),a("h2",{attrs:{id:"privacyidea-freeradius-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacyidea-freeradius-plugin"}},[e._v("#")]),e._v(" privacyIDEA FreeRADIUS plugin")]),e._v(" "),a("p",[e._v("Now we will install the privacyIDEA freeRADIUS plugin, which we will be using to enable RADIUS for "),a("RouterLink",{attrs:{to:"/openvas/"}},[e._v("Greenbone Vulnerability Manager")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo apt-get install privacyidea-radius\n")])])]),a("p",[e._v("In the "),a("code",[e._v("clients.conf")]),e._v(" we will add our client(s), which in this case is our "),a("RouterLink",{attrs:{to:"/openvas/"}},[e._v("Greenbone Vulnerability Manager")]),e._v(". Define the IP address of the "),a("RouterLink",{attrs:{to:"/openvas/"}},[e._v("Greenbone Vulnerability Manager")]),e._v(" and set the secret (do not use the default secret).")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo -i\nroot@ubuntu:~$ sudo nano /etc/freeradius/3.0/clients.conf\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#client example.org {")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       ipaddr          = radius.example.org")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       secret          = testing123")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#}")]),e._v("\nclient GVM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        ipaddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.3\n        secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" testing123\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("In the "),a("code",[e._v("sites-enabled")]),e._v(" folder you will find the default authentication settings for privacyIDEA. Leave the default "),a("code",[e._v("perl-privacyidea")]),e._v(" type.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@ubuntu:~$ cd /etc/freeradius/3.0/sites-enabled/\nroot@ubuntu:~$ cat privacyidea\n")])])]),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    authorize {\n        #files\n        perl-privacyidea\n        if (ok || updated) {\n            update control {\n                Auth-Type := Perl\n            }\n        }\n    }\n    listen {\n        type = auth\n        ipaddr = *\n        port = 0\n    }\n    authenticate {\n        Auth-Type Perl {\n            perl-privacyidea\n        }\n    }\n}\n")])])]),a("p",[e._v("The authentication type which is an enabled mod is located in the "),a("code",[e._v("mods-enabled")]),e._v(" directory and you will see the "),a("code",[e._v("privacyidea_radius.pm")]),e._v(" module file. Leave the default settings.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@ubuntu:~$ cd /etc/freeradius/3.0/mods-enabled/\nroot@ubuntu:~$ cat mods-perl-privacyidea\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perl perl-privacyidea {\n    filename = /usr/share/privacyidea/freeradius/privacyidea_radius.pm\n}\n")])])]),a("h2",{attrs:{id:"configure-privacyidea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-privacyidea"}},[e._v("#")]),e._v(" Configure privacyIDEA")]),e._v(" "),a("p",[e._v("As we did configure the local freeRADIUS plugin and added "),a("RouterLink",{attrs:{to:"/openvas/"}},[e._v("Greenbone Vulnerability Manager")]),e._v(" as a client we will now configure the privacyIDEA authentication server. The freeRADIUS plugin doesn't have to be installed on the same server as privacyIDEA. You can define this in the "),a("code",[e._v("rlm_perl.ini")]),e._v(" file. In this tutorial we will leave the default localhost as our domain.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@ubuntu:~$ exit\nserver@ubuntu:~$ sudo nano /etc/privacyidea/rlm_perl.ini\n")])])]),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[Default]\nURL = https://localhost/validate/check\n#REALM = someRealm\n#RESCONF = someResolver\nSSL_CHECK = false\n#DEBUG = true\n")])])]),a("h2",{attrs:{id:"configure-yubikey-for-privacyidea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-yubikey-for-privacyidea"}},[e._v("#")]),e._v(" Configure YubiKey for privacyIDEA")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("privacyIDEA requires "),a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Start YubiKey Personalization Tool. Go to Settings. In the "),a("code",[e._v("Logging Settings")]),e._v(" select "),a("code",[e._v("Flexible format")]),e._v(" and add "),a("code",[e._v("{serial}, {secretKeyTxt}")]),e._v(" variables in the form field.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/yubikey-settings.png",alt:"yubikey settings"}}),e._v(" "),a("p",[e._v("Next click the "),a("code",[e._v("OATH-HOTP")]),e._v(" tab. Select which slot you wish to write your configuration to. Uncheck "),a("code",[e._v("OATH Token Identifier")]),e._v(" and create the secret key by pressing the "),a("code",[e._v("Generate")]),e._v(" button. Complete the build by clicking the "),a("code",[e._v("Write Configuration")]),e._v(" button and save the CSV file.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/yubikey-hotp.png",alt:"yubikey hotp"}}),e._v(" "),a("h2",{attrs:{id:"enroll-token-w-yubikey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enroll-token-w-yubikey"}},[e._v("#")]),e._v(" Enroll token w/ YubiKey")]),e._v(" "),a("p",[e._v("Before we enroll the token with YubiKey we will create a resolver and realm and select the first user. Login to privacyIDEA at e.g. "),a("code",[e._v("https://192.168.0.1")]),e._v(". In the top menu click "),a("code",[e._v("Config")]),e._v(". Next click the "),a("code",[e._v("Users")]),e._v(" tab and select "),a("code",[e._v("New passwdresolver")]),e._v(". Once you've gave the resolver a name click the "),a("code",[e._v("Save Resolver")]),e._v(" button.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-resolver.png",alt:"privacyidea resolver"}}),e._v(" "),a("p",[e._v("Next we will create the realm. Click the tab "),a("code",[e._v("Realms")]),e._v(". Give the realm a name and check the passwdresolver we just created. Click "),a("code",[e._v("Create Realm")]),e._v(".")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-realm.png",alt:"privacyidea realm"}}),e._v(" "),a("p",[e._v("Now lets select the first user. In the top menu click "),a("code",[e._v("Users")]),e._v(". Select the realm we just created in the left dropdown menu. This will show the list of all users from the "),a("code",[e._v("/etc/passwd")]),e._v(" file. You can select any user from the list. We will go with the user "),a("code",[e._v("mail")]),e._v(" for this example.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-users.png",alt:"privacyidea users"}}),e._v(" "),a("p",[e._v("Once you've decided which user you will connect to the YubiKey you can now assign your first token to a user. In the top menu click "),a("code",[e._v("Token")]),e._v(" and select "),a("code",[e._v("Import Tokens")]),e._v(" in the left menu. Select authentication method "),a("code",[e._v("OATH CSV")]),e._v(" and realm. Click the "),a("code",[e._v("Select file and import")]),e._v(" button and upload the file that you created earlier from the YubiKey configuration.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-token.png",alt:"privacyidea assign token"}}),e._v(" "),a("p",[e._v("Go back to "),a("code",[e._v("All tokens")]),e._v(" in the left menu and you will see your newly enrolled token. Click the serial number for further details.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-token-2.png",alt:"privacyidea token"}}),e._v(" "),a("p",[e._v("Here you will see the specific settings and details for the newly enrolled token. Now we will assign this token to the user. In the "),a("code",[e._v("Assign User")]),e._v(" section select the "),a("code",[e._v("Realm")]),e._v(", fill in the "),a("code",[e._v("Username")]),e._v(" you selected from the resolver list and finally set a "),a("code",[e._v("PIN")]),e._v(" (in this example we used "),a("code",[e._v("mail")]),e._v(" as the pin). Click the "),a("code",[e._v("Assign User")]),e._v(" button.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-assign-token.png",alt:"privacyidea assign token"}}),e._v(" "),a("p",[e._v("Next lets test if the token works. Above the "),a("code",[e._v("Assign User")]),e._v(" section, in the form field next to the test token button, type your selected "),a("code",[e._v("PIN")]),e._v(" and click your "),a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1),e._v(" button and hit the "),a("code",[e._v("Test token")]),e._v(" button.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-test-token.png",alt:"privacyidea test token"}}),e._v(" "),a("p",[e._v("You can also test if privacyIDEA grants access to the freeRADIUS client directly from the command-line. Fill in your "),a("code",[e._v("User-Name")]),e._v(", insert your "),a("code",[e._v("PIN")]),e._v(" within the "),a("code",[e._v("User-Password")]),e._v(" variable and hit your YubiKey button. Make sure to also define your secret.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('server@ubuntu:~$ echo "User-Name=mail, User-Password=XY" | radclient -x -s localhost auth testing123\nSent Access-Request Id 61 from 0.0.0.0:59998 to 127.0.0.1:1812 length 44\n        User-Name = "mail"\n        User-Password = "XY"\n        Cleartext-Password = "XY"\nReceived Access-Accept Id 61 from 127.0.0.1:1812 to 127.0.0.1:59998 length 48\n        Reply-Message = "privacyIDEA access granted"\nPacket summary:\n        Accepted      : 1\n        Rejected      : 0\n        Lost          : 0\n        Passed filter : 1\n        Failed filter : 0\n')])])]),a("p",[e._v("Now go to the "),a("code",[e._v("Config")]),e._v(" menu and select the "),a("code",[e._v("System")]),e._v(" tab. In the "),a("code",[e._v("System Config")]),e._v(" add "),a("code",[e._v("127.0.0.1")]),e._v(" in the "),a("code",[e._v("Override Authorization Clients")]),e._v(" field to enable the validation check against the local subnet (e.g. "),a("code",[e._v("192.168.0.3")]),e._v(").")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea-override-authentication.png",alt:"privacyidea override authentication"}}),e._v(" "),a("h2",{attrs:{id:"enable-2fa-for-greenbone-vulnerability-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-2fa-for-greenbone-vulnerability-manager"}},[e._v("#")]),e._v(" Enable 2FA for Greenbone Vulnerability Manager")]),e._v(" "),a("p",[e._v("Login to your Greenbone Security Assistant at e.g. "),a("code",[e._v("https://192.168.0.3/login")]),e._v(". Once you've logged in select "),a("code",[e._v("Administration")]),e._v(" and "),a("code",[e._v("RADIUS")]),e._v(" in the top menu. Click the "),a("code",[e._v("Edit Radius Authentication")]),e._v(" button. Check the "),a("code",[e._v("Enabled")]),e._v(" box, add the RADIUS host IP address e.g. "),a("code",[e._v("192.168.0.1")]),e._v(" and your secret key. Click the "),a("code",[e._v("Save")]),e._v(" button.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/greenbone-radius.png",alt:"greenbone security assistant radius"}}),e._v(" "),a("p",[e._v("Next lets add the user to the Greebone Security Assistant (GSA). Select "),a("code",[e._v("Administration")]),e._v(" and "),a("code",[e._v("Users")]),e._v(" in the top menu. Click the "),a("code",[e._v("New User")]),e._v(" button. Check "),a("code",[e._v("RADIUS Authentication Only")]),e._v(", select preferred user role and/or group. Add the privacyIDEA IP address in the "),a("code",[e._v("Host Access")]),e._v(" field (e.g. "),a("code",[e._v("192.168.0.1")]),e._v(") and check "),a("code",[e._v("Deny all and allow")]),e._v(". If you want to lock access for the local subnet to GSA you can e.g. in the "),a("code",[e._v("Interface Access")]),e._v(" check "),a("code",[e._v("Deny all and allow")]),e._v(" enter "),a("code",[e._v("192.168.0.0/24")]),e._v(". Once done click the "),a("code",[e._v("Save")]),e._v(" button.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/greenbone-user.png",alt:"greenbone security assistant user"}}),e._v(" "),a("p",[e._v("Logout as administrator from the Greenbone Security Assistant. Add the "),a("code",[e._v("Username")]),e._v(" of your newly created user. In the "),a("code",[e._v("Password")]),e._v(" field type the "),a("code",[e._v("PIN")]),e._v(" and hit the YubiKey button (do not click the Sign In button) and you should successfully be authenticated.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/greenbone-login.png",alt:"greenbone security assistant login"}}),e._v(" "),a("h2",{attrs:{id:"firewall-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[e._v("#")]),e._v(" Firewall settings")]),e._v(" "),a("p",[e._v("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),a("a",{attrs:{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("UFW Settings")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n")])])])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('server@ubuntu:~$ sudo ufw allow 443 comment "privacyIDEA"\n')])])]),a("h2",{attrs:{id:"command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command-line")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Command")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("pi-manage admin")]),e._v(" "),a("td",[e._v("Add or edit existing admin account")])])])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("If you encounter any issue or having questions regarding privacyIDEA I recommend using their very helpful "),a("a",{attrs:{href:"https://community.privacyidea.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community forum"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"recommended-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recommended-reading"}},[e._v("#")]),e._v(" Recommended reading")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://privacyidea.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacyIDEA documentation"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/c/privacyIDEA/videos",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacyIDEA YouTube channel"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"enterprise-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[e._v("#")]),e._v(" Enterprise solutions "),a("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),e._v(" "),a("h3",{attrs:{id:"netknights-privacyidea-enterprise-edition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netknights-privacyidea-enterprise-edition"}},[e._v("#")]),e._v(" NetKnights privacyIDEA Enterprise Edition")]),e._v(" "),a("p",[e._v("privacyIDEA is a modular solution for two factor authentication especially with OTP tokens. It is multi-tenency- and multi-instance-capable. Due to the modular structure privacyIDEA can be quickly and easily adapted and enhanced. E.g. adding new token types is as simple as writing a new lean python module. You do not need to modify your network for privacyIDEA, it does not write to existing databases or user stores. It only needs read access to your user stores like LDAP, Active Directory, SQL, SCIM-service or flat files. Existing workflows can be enhanced without the need to modify them. Using its simple REST like API it can be automated and smoothly be integrated.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://netknights.it/en/produkte/privacyidea/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NetKnights"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"yubienterprise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yubienterprise"}},[e._v("#")]),e._v(" YubiEnterprise  "),a("Badge",{attrs:{text:"affiliate links",type:"warning"}})],1),e._v(" "),a("p",[e._v("Yubico offers enterprise solutions and can easily procure and distribute YubiKey authentication solutions for employees at scale.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yubico"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}}),a("OutboundLink")],1)]),e._v(" "),a("social-share")],1)}),[],!1,null,null,null);t.default=s.exports}}]);