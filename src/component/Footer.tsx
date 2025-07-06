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
        <footer className="relative flex h-6 max-h-6 min-h-6 w-full items-center justify-center gap-6 px-2 sm:justify-end">
            <Button variant="ghost" size="fit" asChild className="text-xs opacity-50">
                <Link to="/$language/legal/privacy-policy" params={{ language }}>
                    {t.footer.privacyPolicy}
                </Link>
            </Button>

            <Button variant="ghost" size="fit" asChild className="text-xs opacity-50">
                <Link to="/$language/legal/terms-and-conditions" params={{ language }}>
                    {t.footer.termsAndConditions}
                </Link>
            </Button>
        </footer>
    );
};

export default Footer;
