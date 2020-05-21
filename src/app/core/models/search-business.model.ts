export class SearchBusiness {
    term: string // Optional. Search term, for example "food" or "restaurants". 
    location: string;
    latitude: string;
    longitude: string;
    radius: string;
    sort_by: string;
    price: string;
    open_now: string;
    open_at: string;

    offset = 0;

    public applyFormValue(formObject: any) {
        if (formObject.price)
            this.price = formObject.price.join(",");
        this.radius = formObject.distance;
        if (formObject.openAt)
            this.open_at = Date.parse(formObject.openAt)+'';;
        this.open_now = formObject.openNow;
        this.sort_by = formObject.sortBy;
    }
}
