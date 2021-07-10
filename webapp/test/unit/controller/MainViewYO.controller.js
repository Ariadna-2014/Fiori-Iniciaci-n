/*global QUnit*/

sap.ui.define([
	"logali/invoices_yoo/controller/MainViewYO.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainViewYO Controller");

	QUnit.test("I should test the MainViewYO controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
