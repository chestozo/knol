// Parse number secure.
function parseNumber(value, default_value) {
    return isNaN(value = +value) ? default_value : value;
}
parseNumber('20', -1); // 20
parseNumber('a20', -1); // -1
