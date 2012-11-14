[Test](http://config.privoxy.org/show-status) privoxy status.

#### Install
* [Install guide](http://hints.macworld.com/article.php?story=20100227045756617).
* Also I had to create user as described there.
* Install command: `make -s install  USER=privoxy GROUP=privoxy`.
* Create symlink `/usr/local/bin/privoxy -> /usr/local/sbin/privoxy`.

#### Run
* `sudo privoxy /usr/local/etc/privoxy/config`
* Set proxy in connection settings. Read more about [here](http://www.privoxy.org/user-manual/quickstart.html).
* Do not forget to set proxy both for ethernet and for wi-fi.

#### Hints
* You need to escape symbols like `?`.

#### Examples
1. Load dev version of script when requesting production version:
```
{+redirect{http://dev.app.com/_index.js}}
app.com/_index.js
```

2. Load `*.swf` file from another location:
```
{+redirect{http://dev.app.com/testing/uploader.swf}}
dev.app.com/swf/uploader/real.swf\?ver=
```