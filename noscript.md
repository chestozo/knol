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

Тут ничего непонятно: часть обработчиков можно повесить на `no.update`, часть на `no.page` или `no.router`.
А вообще у нас нет прямой ссылки на `no.update`.
Куда вешать? Варианты:
- router
- page
- view
- layout
- update

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

Тут всё понятно: триггирим всё на `no.action`:
```js
var action = no.action('like', {
  params: {}
});
action.on('error', function(er) { /* { code: string, message: string } */ });
action.on('done', function(result) {});
```
