"use client";

import { Button } from "@/component/ui/button";
import { getTranslation } from "@/locale/getTranslation";
import { Language } from "@/locale/language";
import { Link } from "@tanstack/react-router";

interface Props {
    language: Language;
}

const Footer = ({ language }: Props) => {
    const t = getTranslation(language);

    return (
        <footer className="relative flex w-full flex-col items-center justify-center gap-4 p-4">
            <div className="flex flex-row justify-center gap-8">
                <Button variant="ghost" size="fit" asChild>
                    <Link to="/$language/legal/privacy-policy" params={{ language }}>
                        {t.footer.privacyPolicy}
                    </Link>
                </Button>

                <Button variant="ghost" size="fit" asChild>
                    <Link to="/$language/legal/terms-and-conditions" params={{ language }}>
                        {t.footer.termsAndConditions}
                    </Link>
                </Button>
            </div>

            <p className="text-sm text-neutral-500">{t.footer.copyright}</p>
        </footer>
    );
};

export default Footer;
