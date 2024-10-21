import { TeamMember } from "@/lib/types";
 
import mustafaeftekin from "@/images/team/mustafaeftekin.jpeg";
 
import serhanergul from "@/images/team/serhanergul.jpg";
 
import tahayildirim from "@/images/team/tahayildirim.jpg";


export const teamMembers: TeamMember[] = [
    {
        avatar: serhanergul, // Added avatar
        name: "Serhan",
        surname: 'Ergül',
        title: 'Organiser',
        variant: 'red'
    },
  
    // Organization Team (Green Variant)
    {
        avatar: tahayildirim,
        name: "Taha",
        surname: "Yıldırım",
        title: "Organization Team Lead",
        variant: "green",
    },
   
 
   
  
    // Project Team (Blue Variant)
    {
        avatar: mustafaeftekin,
        name: "Mustafa",
        surname: "Eftekin",
        title: "Project Team Lead",
        variant: "blue",
    },
  
  
    // Social Media and Design Team (Yellow Variant)
    
    {
        name: "Burcu",
        surname: "Aydın",
        title: "Social Media and Design Team",
        variant: "yellow",
    },
];
