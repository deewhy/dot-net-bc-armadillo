import { Sponsor } from '../models/sponsor';

export class SponsorDummyData {
    getSponsors(): Sponsor[] {
        let s1: Sponsor = new Sponsor();
        s1.name = "Google";
        s1.linkUrl = "https://www.google.com";
        s1.logoUrl = "https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png";

        let s2: Sponsor = new Sponsor();
        s2.name = "Yahoo!";
        s2.linkUrl = "https://www.yahoo.com";
        s2.logoUrl = "http://l2.yimg.com/bt/api/res/1.2/rt4LYW.WMjOpof_ahsTcjA--/YXBwaWQ9eW5ld3M7cT04NQ--/http://mit.zenfs.com/1776/2013/04/Yahoo_Logo.png";

        let array = new Array();

        array.push(s1, s2);

        return array;
    }
}