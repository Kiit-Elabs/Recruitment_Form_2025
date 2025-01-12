interface candidate extends Document {
    name: string,
    domain: string,
    kiitemail: string,
    email: string,
    roll: string,
    gender: string,
    contactNumber: string,
    yearOfStudy: string,
    branch: string,
    links: SocialLinks,
    existSocieties: string,
    whyElabs: string,
    fromWhereYouGotKnow: string,
    anythingElse: string,

    // Backend Stuff

    present: boolean,
    interviewed: boolean,
    interviewedBy: string,
    isinterviewRunning: boolean,
    selected: boolean,
    selectedBy: string,
    message: string
}

interface APIResponse {
    message: string,
    status: boolean
}