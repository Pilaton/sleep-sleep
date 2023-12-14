import base from '@pilaton/eslint-config-base';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([{ ignores: ['build/'] }, ...base]);
