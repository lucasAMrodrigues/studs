/**
 *  Como o node faz cash, quando vc importa um modulo, por padrão, esse módulo é cacheado
 *  A função factory contorna isso, importar com um novo objeto.
 */

module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}