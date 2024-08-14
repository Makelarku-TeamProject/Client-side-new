import React from "react";
import SectionNavbar from "../components/Customer/SectionNavbar/SectionNavbar";
import SectionCampaign from "../components/Customer/SectionCampaign/SectionCampaign";
import SectionContact from "../components/Customer/SectionContact/SectionContact";
import SectionCard from "../components/Customer/SectionCard/SectionCard";
import SectionHero from "../components/Customer/SectionHero/SectionHero";
import SectionPartnership from "../components/Customer/SectionPartnership/SectionPartnership";
import SectionFooter from "../components/Customer/SectionFooter/SectionFooter";
import '../components/Customer/app.css';
import { Layout } from "antd";

const CustomerPage = () => {
    return (
    <Layout>
        <SectionNavbar/>
        <SectionHero/>
        <SectionCard/>
        <SectionCampaign/>
        <SectionPartnership/>
        <SectionContact/>
        <SectionFooter/>
    </Layout>
    )
}

export default CustomerPage