import type { NextApiRequest, NextApiResponse } from "next";
import weather from "weather-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(!req.query.city) {
        return res.status(400).json({ code: 400, message: "City Parameter is Not Specified" })
    }/*  else if(req.query.degree && req.query.degree !== "fahrenheit") {
        return res.status(400).json({ code: 400, message: "Degree Parameter Must be 'celcius' or 'fahrenheit'" })
    } */

    let degreeType = "C";

    if(req.query.degree) {
        switch(req.query.degree) {
            case "celcius":
                degreeType = "C";
                break;
            case "fahrenheit":
                degreeType = "F";
                break;
            default:
                res.status(400).json({ code: 400, message: "Degree Parameter Must be 'celcius' or 'fahrenheit'" })
                break;
        }
    }

    weather.find({ search: req.query.city, degreeType }, function(err: any, result: any) {
        if(err) res.status(500).json({ code: 500, message: err });
       
        res.status(200).json(JSON.stringify(result, null, 2));
    });
}