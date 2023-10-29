; (function () {


  'use strict';

  angular
    .module('QCMApp')
    .factory('LocalStorage', [
      '$window', '$rootScope', LocalStorageService
    ]);

  // Le Factory

  function LocalStorageService($window, $rootScope) {

    /**
     * Tester si le navigateur support localStorage
     */
    var storage = (typeof window.localStorage === 'undefined') ? undefined : window.localStorage,
    supported = !(typeof storage === undefined || typeof window.JSON === undefined);

    /*
    * une fois localStorage mise a jour
    * touts les valeurs sont actualise dans le Vue
     */
    angular.element($window).on('storage', function (event, name) {
      if (event.key === name) {
        $rootScope.$apply();
      }
    });

    return {
      set: set,
      get: get,
      update: update,
      remove: remove,
      removeAll: removeAll,
      list: list
    };

    //////////////// function definitions

    /**
     * mise en place la valeur de localStorage, et verifier si il est deja exist
     *
     * @param {string} name Nom de la valeur de localStorage
     * @param {object} val  Returner la valeur souvgarder
     */
    function set(name, val) {
      if (!supported) {
        console.log('Le navigateur ne support pas localStorage, verifier que votre navigateur support $cookies.');
      }

      // si il y a des localStorages ont le meme nom
      if (window.localStorage.getItem(name) !== null) {
        console.warn('le localStorage ' + name + ' est deja exists.');
      } else {
        return $window.localStorage && $window.localStorage.setItem(name, angular.toJson(val));
      }
    }


    /**
     * getData apartir de localStorage
     *
     * @param  {string} name Nom de la valeur de localStorage
     * @return {*}           Returner la valeur souvgarder
     */
    function get(name) {
      if (!supported) {
        console.log('Le navigateur ne support pas localStorage, verifier que votre navigateur support $cookies.');
      }

      return $window.localStorage && angular.fromJson($window.localStorage.getItem(name));
    }


    /**
     * mise a jour une donne deja existe
     *
     * @param  {string}  name Nom de la valeur de localStorage
     * @param {object}   val  Returner la valeur souvgarder
     */
    function update(name, val) {
      if (!supported) {
        console.log('Le navigateur ne support pas localStorage, verifier que votre navigateur support $cookies.');
      }

      return $window.localStorage && $window.localStorage.setItem(name, angular.toJson(val));
    }



    /**
     * supprimer une valeur de localStorage
     *
     * @param  {string} name Nom de la valeur de localStorage
     * @return {boolean}     True/false si la valeur est bien supprimer
     */
    function remove(name) {
      if (!supported) {
        console.log('Le navigateur ne support pas localStorage, verifier que votre navigateur support $cookies.');
      }

      return $window.localStorage && $window.localStorage.removeItem(name);
    }


    /**
     * supprimer tout les valeur de localStorage
     *
     * @return {boolean}     True/false si la valeur est bien supprimer
     */
    function removeAll() {
      if (!supported) {
        console.log('Le navigateur ne support pas localStorage, verifier que votre navigateur support $cookies.');
      }

      return $window.localStorage && $window.localStorage.clear();
    }


    /**
     * Retourner l'object de tout les valeurs enregistrer dans localStorage
     *
     * @return {object}    Object
     */
    function list() {
      return $window.localStorage;
    }

  }


})();
