NOTE for https urls privoxy has less capabilities:
```
This is a HTTPS URL, so the part after the "/" is ignored as Privoxy doesn't see the path for real HTTPS requests either.
```
But there is a very nice proxy https://github.com/Kolyaj/Yaxy that can do it.

#### Privoxy status
[Test](http://config.privoxy.org/show-status) privoxy status.

#### Install
`brew install`
or
you can download `dmg` file from http://www.privoxy.org/.

#### Uninstall
`brew rm privoxy && brew deps privoxy | xargs brew rm`

#### Config

I have placed my configs in separate file, located `~/configs/privoxy/my.action`

Add a reference in config file `/usr/local/etc/privoxy/config`:
```sh
actionsfile /Users/chestozo/configs/privoxy/my.action
```

Also I had to add `alias` section before using any alias in `my.action` config file.
It looks like so now:
```sh
{{alias}}
+block-as-image     = +block{Blocked image request.} +handle-as-image

{ +block-as-image }
# ...

{ -block }
# ...
```

#### Hints
* You need to escape symbols like `?` (like so: `\?`).

#### Examples
1. Load dev version of script when requesting production version:
```sh
{+redirect{http://dev.app.com/_index.js}}
app.com/_index.js
```

2. Load `*.swf` file from another location:
```sh
{+redirect{http://dev.app.com/testing/uploader.swf}}
dev.app.com/swf/uploader/real.swf\?ver=
```

3. Redirect with rewrite (from all ports):

```sh
# http://localhost:8081/models/?_m=auth --> http://app.host/models/?_m=auth
{+redirect{s@^.*\/models/(.*)$@http://app.host/models/$1@}}
/models/
```

#### Old version guide (3.0.17)
* [Install guide](http://hints.macworld.com/article.php?story=20100227045756617).
* Also I had to create user as described there.
* Install command: `make -s install  USER=privoxy GROUP=privoxy`.
* Create symlink `/usr/local/bin/privoxy -> /usr/local/sbin/privoxy`.
* run: `sudo privoxy /usr/local/etc/privoxy/config`
* Set proxy in connection settings. Read more about [here](http://www.privoxy.org/user-manual/quickstart.html).
* Do not forget to set proxy both for ethernet and for wi-fi.
