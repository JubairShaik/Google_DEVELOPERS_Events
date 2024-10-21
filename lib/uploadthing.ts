// import { generateReactHelpers } from "@uploadthing/react/hooks";
 
// import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
// export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();

// Use the correct path based on the current version of the package
import { generateReactHelpers } from "@uploadthing/react"; // Remove '/hooks'
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
