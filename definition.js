Blockly.Blocks['citybit_mq3_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "citybit_mq3_sensor",
        "message0": "đọc cảm biến đo khí ga %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#6c42bf",
        "tooltip": "Đọc giá trị của cảm biến đo khí ga MQ3",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['mq135_citybit'];
  }
  
};

Blockly.Python['citybit_mq3_sensor'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_mq3'] = 'from citybit_mq3 import MQ3';
  Blockly.Python.definitions_["import_create_mq3"] = 'mq3_citybit = MQ3(Pin(' + dropdown_name + '.adc_pin)) # analog PIN';
  // TODO: Assemble Python into code variable.
  var code = 'mq3_citybit.get_ppm()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};