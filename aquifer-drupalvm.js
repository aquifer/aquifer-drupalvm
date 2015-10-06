/**
 * @file
 * Contains code that defines an Aquifer extension that can run an Aquifer project in a drupalvm instance.
 */

/**
 * Extension that is exported to Aquifer.
 * @param {object} Aquifer instance of Aquifer containing an active project.
 * @param {object} AquiferDrupalVMConfig config object passed in from Aquifer project's json file.
 * @returns {function} object that consumes Aquifer's extension API.
 */
module.exports = function(Aquifer, AquiferDrupalVMConfig) {

  'use strict';

  var AquiferDrupalVM = function () {};

  /**
   * Specifies commands that this extension provides.
   * @returns {object} commands that this extension provides.
   */
  AquiferDrupalVM.commands = function () {
    return {
      'vm': {
        description: 'Launch, and provision drupalvm instance.'
      }
    }
  }

  /**
   * Launches a drupalvm instance.
   * @param {string} command string representing the name of the command that is being run.
   * @param {object} options options passed from the command.
   * @param {function} callback function that is called when there is an error message to send.
   * @returns {boolean} true if command ran correctly, false otherwise.
   */
  AquiferDrupalVM.run = function (command, options, callback) {

  }

  return AquiferDrupalVM;
}
