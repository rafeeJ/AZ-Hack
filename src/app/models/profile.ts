export interface Profile { 
    uid?: string;
    displayName?: string;
    
    diet_default?: string;
    car_travel_default?: number;
    train_travel_default?: number;
    bus_travel_default?: number;

    food_disposal_default?: number;
    plastic_disposal_default?: number;
    paper_disposal_default?: number;
    glass_disposal_default?: number;
    tin_disposal_default?: number;

    mobile_screentime_default?: number;
    computer_screetime_default?: number;
    tv_screentime_default?: number;
    organisations?: Array<string>
}