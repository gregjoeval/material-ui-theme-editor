import saveAs from 'file-saver';
import get from 'lodash/get';
import set from 'lodash/set';

const whitelist = [
    'breakpoints.keys',
    'breakpoints.values',
    'direction',
    'palette',
    'shape',
    'shadows',
    'spacing',
    'transitions.duration',
    'transitions.easing',
    'zIndex'

];

const convert = (theme) => {
    return whitelist.reduce((res, key) => {
        const value = get(theme, key);
        return set(res, key, value);
    }, {});
};

const download = (theme, fileName = "theme") => {
    const clean = convert(theme);
    const fileToSave = new Blob([JSON.stringify(clean)], {
        type: 'application/json',
        name: 'theme.json',
    });


    saveAs(fileToSave, fileName + '.json');
    return Promise.resolve();
};

export default {
    download,
};
