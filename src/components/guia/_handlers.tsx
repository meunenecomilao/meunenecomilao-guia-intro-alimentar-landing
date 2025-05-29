import { trackEvent } from "@/lib/google-analytics"

import data from '@/data.json';

export function onClickBuyGuia() {
    trackEvent("guia", "click_purchase")
    window.open(data.guia.buy_link, "_blank")
}