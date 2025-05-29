import { trackEvent } from "@/lib/google-analytics"

import data from '@/data.json';

export function onClickBuyReceitas() {
    trackEvent("receitas", "click_purchase")
    window.open(data.receitas.buy_link, "_blank")
}