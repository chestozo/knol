Пока для 2х кейсов:
- смена урла, которая приводит к новому `no.update`'у (вот тут #39 есть отдельно про внутреннюю работу `no.update`)
- выполнение `no.action`

### 1. Page update
```
url changed
route
  FAIL: route not found
  good route
    get layout
    get models to request
    request models
      FAIL: not enought models for page update
      create update
      update run
        FAIL: update failed (no html for view?)
        good
```

- FAIL: route not found
- FAIL: not enought models for page update
- FAIL: update failed (no html for view?)

### 2. Action run
```
collect data to request
  FAIL: not enough data to perform action
  enough to request
    request models
      FAIL: action faled { error: code, message: '' }
      good: update what needed
```

- FAIL: not enough data to perform action
- FAIL: action faled { error: code, message: '' }
