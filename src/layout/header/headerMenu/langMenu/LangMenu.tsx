import React from 'react';
import { S } from '../HeaderMenu_Styles';

const langs = [
    { title: "En", value: "En" },
    { title: "Ru", value: "Ru" }
]

export const LangMenu: React.FC = () => {
    return (
        <S.LangMenu>
            <select>
                {langs.map((lang, index) => {
                    return <option key={index}
                        value={lang.value}>
                        {lang.title}
                    </option>
                })}
            </select>
        </S.LangMenu>
    );
};
