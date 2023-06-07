import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';

import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


const locale = navigator.language;
let messages = locale.startsWith('es') ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
        <JobsList />
    </IntlProvider>,
    document.getElementById("root")
);
