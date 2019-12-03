//; -*- mode: rjsx;-*-
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import languages from '../languages';

const LanguagesSelect = () => {
  const { i18n } = useTranslation();

  return (
    <select sx={{ variant: 'styles.select' }} defaultValue={i18n.language} >
      {languages.map(language => (
        <option
          onClick={i18n.changeLanguage.bind(i18n, language.short)}
          value={language.short}
          key={language.short}
        >
          {language.long}
        </option>
      ))}
    </select>
  );
};

export default LanguagesSelect;