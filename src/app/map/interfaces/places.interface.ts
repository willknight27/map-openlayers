export interface PlacesResponse {
    place_id:     number;
    licence:      string;
    osm_type:     string;
    osm_id:       number;
    boundingbox:  string[];
    lat:          string;
    lon:          string;
    display_name: string;
    class:        string;
    type:         string;
    importance:   number;
    icon?:        string;
    address:      Address;
}

export interface Address {
    city?:            string;
    county?:          string;
    state:            string;
    "ISO3166-2-lvl4": string;
    country:          string;
    country_code:     string;
    neighbourhood?:   string;
    suburb?:          string;
    municipality?:    string;
    state_district?:  string;
    region?:          string;
    postcode?:        string;
    hamlet?:          string;
}