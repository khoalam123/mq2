Blockly.Blocks['mq2_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "mq2_sensor",
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
    return ['mq2'];
  }
  
};

Blockly.Python['citybit_mq3_sensor'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';

  Blockly.Python.definitions_['import_mq2'] = 'from MQ2 import MQ2';
  Blockly.Python.definitions_["import_create_mq2"] = 'mq2 = MQ2(Pin(' + dropdown_name + '.adc_pin)) # analog PIN';
  // TODO: Assemble Python into code variable.
  var code = 'mq2.readLPG()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};