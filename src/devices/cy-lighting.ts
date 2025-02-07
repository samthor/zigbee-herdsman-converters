import extend from '../lib/extend';

const definitions: Definition[] = [
    {
        zigbeeModel: ['DM A60F'],
        model: 'DM A60F',
        vendor: 'CY-LIGHTING',
        description: '6W smart dimmable E27 lamp 2700K',
        extend: extend.light_onoff_brightness(),
    },
];

module.exports = definitions;
