let json =`[{"pid":1,"pname":"systemd","son":["colord","systemd","gnome-keyring-d","geoclue","fwupd","kthreadd","systemd-journal","systemd-udevd","systemd-resolve","systemd-timesyn","acpid","avahi-daemon","dbus-daemon","etworkManager","irqbalance","networkd-dispat","polkitd","rsyslogd","snapd","switcheroo-cont","udisksd","wpa_supplicant","vsftpd","odemManager","whoopsie","kerneloops","kerneloops","accounts-daemon","cron","cupsd","cups-browsed","systemd-logind","gdm3","unattended-upgr","rtkit-daemon","upowerd"]},
{"pid":1204,"pname":"colord","son":[]},
{"pid":1283,"pname":"systemd","son":["sd-pam","pulseaudio","tracker-miner-f","dbus-daemon","gvfsd","gvfsd-fuse","gvfs-udisks2-vo","gvfs-mtp-volume","gvfs-afc-volume","gvfs-gphoto2-vo","gvfs-goa-volume","goa-daemon","goa-identity-se","at-spi-bus-laun","gnome-session-c","gnome-session-b","gnome-shell","ibus-x11","ibus-portal","at-spi2-registr","xdg-permission-","gnome-shell-cal","evolution-sourc","evolution-calen","dconf-service","evolution-addre","gjs","gsd-a11y-settin","gsd-color","gsd-datetime","gsd-housekeepin","gsd-keyboard","gsd-media-keys","gsd-power","gsd-print-notif","gsd-rfkill","gsd-screensaver","gsd-sharing","gsd-smartcard","gsd-sound","gsd-wacom","gsd-xsettings","gsd-printer","snap-store","xdg-document-po","firefox","gvfsd-metadata","nautilus","tracker-store"]},
{"pid":1284,"pname":"sd-pam","son":[]},
{"pid":1290,"pname":"pulseaudio","son":[]},
{"pid":1292,"pname":"tracker-miner-f","son":[]},
{"pid":1295,"pname":"dbus-daemon","son":[]},
{"pid":1314,"pname":"gvfsd","son":["gvfsd-trash"]},
{"pid":1670,"pname":"gvfsd-trash","son":[]},
{"pid":1320,"pname":"gvfsd-fuse","son":[]},
{"pid":1332,"pname":"gvfs-udisks2-vo","son":[]},
{"pid":1338,"pname":"gvfs-mtp-volume","son":[]},
{"pid":1342,"pname":"gvfs-afc-volume","son":[]},
{"pid":1347,"pname":"gvfs-gphoto2-vo","son":[]},
{"pid":1351,"pname":"gvfs-goa-volume","son":[]},
{"pid":1355,"pname":"goa-daemon","son":[]},
{"pid":1377,"pname":"goa-identity-se","son":[]},
{"pid":1494,"pname":"at-spi-bus-laun","son":["dbus-daemon"]},
{"pid":1499,"pname":"dbus-daemon","son":[]},
{"pid":1530,"pname":"gnome-session-c","son":[]},
{"pid":1537,"pname":"gnome-session-b","son":["gsd-disk-utilit","guake","evolution-alarm","update-notifier"]},
{"pid":1710,"pname":"gsd-disk-utilit","son":[]},
{"pid":1747,"pname":"guake","son":["bash","bash"]},
{"pid":1908,"pname":"bash","son":[]},
{"pid":1936,"pname":"bash","son":["test2"]},
{"pid":3313,"pname":"test2","son":[]},
{"pid":1753,"pname":"evolution-alarm","son":[]},
{"pid":2729,"pname":"update-notifier","son":[]},
{"pid":1556,"pname":"gnome-shell","son":["ibus-daemon"]},
{"pid":1585,"pname":"ibus-daemon","son":["ibus-dconf","ibus-extension-","ibus-engine-lib","ibus-engine-sim"]},
{"pid":1589,"pname":"ibus-dconf","son":[]},
{"pid":1590,"pname":"ibus-extension-","son":[]},
{"pid":1870,"pname":"ibus-engine-lib","son":[]},
{"pid":2581,"pname":"ibus-engine-sim","son":[]},
{"pid":1594,"pname":"ibus-x11","son":[]},
{"pid":1597,"pname":"ibus-portal","son":[]},
{"pid":1608,"pname":"at-spi2-registr","son":[]},
{"pid":1612,"pname":"xdg-permission-","son":[]},
{"pid":1617,"pname":"gnome-shell-cal","son":[]},
{"pid":1623,"pname":"evolution-sourc","son":[]},
{"pid":1632,"pname":"evolution-calen","son":[]},
{"pid":1645,"pname":"dconf-service","son":[]},
{"pid":1648,"pname":"evolution-addre","son":[]},
{"pid":1662,"pname":"gjs","son":[]},
{"pid":1680,"pname":"gsd-a11y-settin","son":[]},
{"pid":1681,"pname":"gsd-color","son":[]},
{"pid":1685,"pname":"gsd-datetime","son":[]},
{"pid":1688,"pname":"gsd-housekeepin","son":[]},
{"pid":1691,"pname":"gsd-keyboard","son":[]},
{"pid":1696,"pname":"gsd-media-keys","son":[]},
{"pid":1697,"pname":"gsd-power","son":[]},
{"pid":1698,"pname":"gsd-print-notif","son":[]},
{"pid":1707,"pname":"gsd-rfkill","son":[]},
{"pid":1711,"pname":"gsd-screensaver","son":[]},
{"pid":1720,"pname":"gsd-sharing","son":[]},
{"pid":1728,"pname":"gsd-smartcard","son":[]},
{"pid":1734,"pname":"gsd-sound","son":[]},
{"pid":1737,"pname":"gsd-wacom","son":[]},
{"pid":1743,"pname":"gsd-xsettings","son":[]},
{"pid":1791,"pname":"gsd-printer","son":[]},
{"pid":1794,"pname":"snap-store","son":[]},
{"pid":1834,"pname":"xdg-document-po","son":["fusermount"]},
{"pid":1838,"pname":"fusermount","son":[]},
{"pid":2256,"pname":"firefox","son":["rivileged Cont","eb Content","ebExtensions","eb Content"]},
{"pid":2334,"pname":"rivileged Cont","son":[]},
{"pid":2374,"pname":"eb Content","son":[]},
{"pid":2445,"pname":"ebExtensions","son":[]},
{"pid":2537,"pname":"eb Content","son":[]},
{"pid":2726,"pname":"gvfsd-metadata","son":[]},
{"pid":2988,"pname":"nautilus","son":[]},
{"pid":3307,"pname":"tracker-store","son":[]},
{"pid":1302,"pname":"gnome-keyring-d","son":[]},
{"pid":1634,"pname":"geoclue","son":[]},
{"pid":1950,"pname":"fwupd","son":[]},
{"pid":2,"pname":"kthreadd","son":["pm_wq","kswapd0","ecryptfs-kthrea","kthrotld","rcu_sched","acpi_thermal_pm","scsi_eh_0","scsi_tmf_0","scsi_eh_1","scsi_tmf_1","vfio-irqfd-clea","kworker/u8:3-events_power_efficient","ipv6_addrconf","migration/0","kstrp","idle_inject/0","zswap-shrink","kworker/u9:0","charger_manager","kworker/3:1H-kblockd","kworker/3:2-events","cpuhp/0","cpuhp/1","idle_inject/1","migration/1","scsi_eh_2","scsi_tmf_2","ksoftirqd/1","kworker/0:2-mm_percpu_wq","kworker/2:1H-kblockd","kworker/1:1H-kblockd","kworker/0:1H-kblockd","kworker/1:0H","jbd2/sda3-8","ext4-rsv-conver","cpuhp/2","idle_inject/2","migration/2","ksoftirqd/2","kworker/2:0H-kblockd","cpuhp/3","idle_inject/3","migration/3","rcu_gp","ksoftirqd/3","loop0","kworker/u8:2-events_power_efficient","kworker/0:0-events","kworker/3:0-events","loop1","kworker/1:0-mm_percpu_wq","loop2","loop3","kworker/0:3","kworker/3:0H-kblockd","kworker/3:1-ata_sff","kworker/3:3-mm_percpu_wq","loop4","kworker/u8:0-events_unbound","loop5","kdevtmpfs","netns","rcu_tasks_kthre","rcu_tasks_rude_","loop6","loop7","loop8","rcu_tasks_trace","loop9","kworker/2:2-events","kauditd","khungtaskd","irq/18-vmwgfx","ttm_swap","rcu_par_gp","oom_reaper","writeback","cryptd","kcompactd0","ksmd","khugepaged","kworker/1:1-events","kworker/0:0H-kblockd","kworker/2:3-events","kworker/0:1-events","mm_percpu_wq","kintegrityd","kblockd","blkcg_punt_bio","tpm_dev_wq","ata_sff","md","edac-poller","devfreq_wq","watchdogd"]},
{"pid":102,"pname":"pm_wq","son":[]},
{"pid":106,"pname":"kswapd0","son":[]},
{"pid":107,"pname":"ecryptfs-kthrea","son":[]},
{"pid":109,"pname":"kthrotld","son":[]},
{"pid":11,"pname":"rcu_sched","son":[]},
{"pid":110,"pname":"acpi_thermal_pm","son":[]},
{"pid":111,"pname":"scsi_eh_0","son":[]},
{"pid":112,"pname":"scsi_tmf_0","son":[]},
{"pid":113,"pname":"scsi_eh_1","son":[]},
{"pid":114,"pname":"scsi_tmf_1","son":[]},
{"pid":116,"pname":"vfio-irqfd-clea","son":[]},
{"pid":117,"pname":"kworker/u8:3-events_power_efficient","son":[]},
{"pid":118,"pname":"ipv6_addrconf","son":[]},
{"pid":12,"pname":"migration/0","son":[]},
{"pid":127,"pname":"kstrp","son":[]},
{"pid":13,"pname":"idle_inject/0","son":[]},
{"pid":130,"pname":"zswap-shrink","son":[]},
{"pid":131,"pname":"kworker/u9:0","son":[]},
{"pid":136,"pname":"charger_manager","son":[]},
{"pid":137,"pname":"kworker/3:1H-kblockd","son":[]},
{"pid":138,"pname":"kworker/3:2-events","son":[]},
{"pid":14,"pname":"cpuhp/0","son":[]},
{"pid":15,"pname":"cpuhp/1","son":[]},
{"pid":16,"pname":"idle_inject/1","son":[]},
{"pid":17,"pname":"migration/1","son":[]},
{"pid":178,"pname":"scsi_eh_2","son":[]},
{"pid":179,"pname":"scsi_tmf_2","son":[]},
{"pid":18,"pname":"ksoftirqd/1","son":[]},
{"pid":182,"pname":"kworker/0:2-mm_percpu_wq","son":[]},
{"pid":183,"pname":"kworker/2:1H-kblockd","son":[]},
{"pid":184,"pname":"kworker/1:1H-kblockd","son":[]},
{"pid":185,"pname":"kworker/0:1H-kblockd","son":[]},
{"pid":20,"pname":"kworker/1:0H","son":[]},
{"pid":205,"pname":"jbd2/sda3-8","son":[]},
{"pid":206,"pname":"ext4-rsv-conver","son":[]},
{"pid":21,"pname":"cpuhp/2","son":[]},
{"pid":22,"pname":"idle_inject/2","son":[]},
{"pid":23,"pname":"migration/2","son":[]},
{"pid":24,"pname":"ksoftirqd/2","son":[]},
{"pid":26,"pname":"kworker/2:0H-kblockd","son":[]},
{"pid":27,"pname":"cpuhp/3","son":[]},
{"pid":28,"pname":"idle_inject/3","son":[]},
{"pid":29,"pname":"migration/3","son":[]},
{"pid":3,"pname":"rcu_gp","son":[]},
{"pid":30,"pname":"ksoftirqd/3","son":[]},
{"pid":304,"pname":"loop0","son":[]},
{"pid":3077,"pname":"kworker/u8:2-events_power_efficient","son":[]},
{"pid":3082,"pname":"kworker/0:0-events","son":[]},
{"pid":3115,"pname":"kworker/3:0-events","son":[]},
{"pid":312,"pname":"loop1","son":[]},
{"pid":3154,"pname":"kworker/1:0-mm_percpu_wq","son":[]},
{"pid":316,"pname":"loop2","son":[]},
{"pid":317,"pname":"loop3","son":[]},
{"pid":3198,"pname":"kworker/0:3","son":[]},
{"pid":32,"pname":"kworker/3:0H-kblockd","son":[]},
{"pid":3248,"pname":"kworker/3:1-ata_sff","son":[]},
{"pid":3249,"pname":"kworker/3:3-mm_percpu_wq","son":[]},
{"pid":325,"pname":"loop4","son":[]},
{"pid":3269,"pname":"kworker/u8:0-events_unbound","son":[]},
{"pid":329,"pname":"loop5","son":[]},
{"pid":33,"pname":"kdevtmpfs","son":[]},
{"pid":34,"pname":"netns","son":[]},
{"pid":35,"pname":"rcu_tasks_kthre","son":[]},
{"pid":36,"pname":"rcu_tasks_rude_","son":[]},
{"pid":365,"pname":"loop6","son":[]},
{"pid":366,"pname":"loop7","son":[]},
{"pid":369,"pname":"loop8","son":[]},
{"pid":37,"pname":"rcu_tasks_trace","son":[]},
{"pid":371,"pname":"loop9","son":[]},
{"pid":378,"pname":"kworker/2:2-events","son":[]},
{"pid":38,"pname":"kauditd","son":[]},
{"pid":39,"pname":"khungtaskd","son":[]},
{"pid":394,"pname":"irq/18-vmwgfx","son":[]},
{"pid":398,"pname":"ttm_swap","son":[]},
{"pid":4,"pname":"rcu_par_gp","son":[]},
{"pid":40,"pname":"oom_reaper","son":[]},
{"pid":41,"pname":"writeback","son":[]},
{"pid":415,"pname":"cryptd","son":[]},
{"pid":42,"pname":"kcompactd0","son":[]},
{"pid":43,"pname":"ksmd","son":[]},
{"pid":44,"pname":"khugepaged","son":[]},
{"pid":48,"pname":"kworker/1:1-events","son":[]},
{"pid":6,"pname":"kworker/0:0H-kblockd","son":[]},
{"pid":614,"pname":"kworker/2:3-events","son":[]},
{"pid":7,"pname":"kworker/0:1-events","son":[]},
{"pid":9,"pname":"mm_percpu_wq","son":[]},
{"pid":91,"pname":"kintegrityd","son":[]},
{"pid":92,"pname":"kblockd","son":[]},
{"pid":93,"pname":"blkcg_punt_bio","son":[]},
{"pid":94,"pname":"tpm_dev_wq","son":[]},
{"pid":95,"pname":"ata_sff","son":[]},
{"pid":96,"pname":"md","son":[]},
{"pid":97,"pname":"edac-poller","son":[]},
{"pid":98,"pname":"devfreq_wq","son":[]},
{"pid":99,"pname":"watchdogd","son":[]},
{"pid":246,"pname":"systemd-journal","son":[]},
{"pid":291,"pname":"systemd-udevd","son":[]},
{"pid":604,"pname":"systemd-resolve","son":[]},
{"pid":605,"pname":"systemd-timesyn","son":[]},
{"pid":632,"pname":"acpid","son":[]},
{"pid":634,"pname":"avahi-daemon","son":["avahi-daemon"]},
{"pid":676,"pname":"avahi-daemon","son":[]},
{"pid":635,"pname":"dbus-daemon","son":[]},
{"pid":637,"pname":"etworkManager","son":[]},
{"pid":646,"pname":"irqbalance","son":[]},
{"pid":648,"pname":"networkd-dispat","son":[]},
{"pid":650,"pname":"polkitd","son":[]},
{"pid":653,"pname":"rsyslogd","son":[]},
{"pid":654,"pname":"snapd","son":[]},
{"pid":660,"pname":"switcheroo-cont","son":[]},
{"pid":662,"pname":"udisksd","son":[]},
{"pid":664,"pname":"wpa_supplicant","son":[]},
{"pid":716,"pname":"vsftpd","son":[]},
{"pid":719,"pname":"odemManager","son":[]},
{"pid":749,"pname":"whoopsie","son":[]},
{"pid":750,"pname":"kerneloops","son":[]},
{"pid":754,"pname":"kerneloops","son":[]},
{"pid":773,"pname":"accounts-daemon","son":[]},
{"pid":774,"pname":"cron","son":[]},
{"pid":775,"pname":"cupsd","son":[]},
{"pid":776,"pname":"cups-browsed","son":[]},
{"pid":779,"pname":"systemd-logind","son":[]},
{"pid":792,"pname":"gdm3","son":["gdm-session-wor"]},
{"pid":1273,"pname":"gdm-session-wor","son":["gdm-x-session"]},
{"pid":1329,"pname":"gdm-x-session","son":["org","gnome-session-b"]},
{"pid":1331,"pname":"org","son":[]},
{"pid":1389,"pname":"gnome-session-b","son":["ssh-agent"]},
{"pid":1463,"pname":"ssh-agent","son":[]},
{"pid":810,"pname":"unattended-upgr","son":[]},
{"pid":891,"pname":"rtkit-daemon","son":[]},
{"pid":982,"pname":"upowerd","son":[]}
]`

let a = JSON.parse(json);
