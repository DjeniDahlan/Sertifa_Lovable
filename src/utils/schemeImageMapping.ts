
/**
 * This utility maps certification scheme IDs to their corresponding images
 */

// Mapping of scheme IDs to image paths
export const schemeImageMapping: Record<number, string> = {
  1: "/lovable-uploads/3db2bf2d-c336-4acb-961b-85fc47a7617d.png", // AI hand
  2: "/lovable-uploads/3ddcbda0-2e06-4c6e-a73a-32d36dc26aa2.png", // Woman in gray
  3: "/lovable-uploads/090e88f4-f5a9-46bb-9b90-b758ea431c06.png", // Frustrated developer
  4: "/lovable-uploads/f4760378-7481-4df1-b7eb-aa02eb9f6039.png", // Analytics dashboard
  5: "/lovable-uploads/8863a0ca-c1e3-4102-a04a-f8bf84ca6787.png", // Server racks
  6: "/lovable-uploads/8b0a5356-7abf-4097-852b-5d36bc69eb5b.png", // Man smiling
  7: "/lovable-uploads/00338526-9ff1-4dbe-af94-053b712249af.png", // Two developers at desk
  8: "/lovable-uploads/9f7375cb-80d4-4599-a6ce-64ad4fa96f48.png", // Team coding
  9: "/lovable-uploads/8437655c-eaf6-440c-9b87-f8c4d81dee86.png", // Security lock
  10: "/lovable-uploads/14f7ef81-cf89-4e18-bac3-4f7856dba368.png", // Circuit board
  11: "/lovable-uploads/3ee1618e-da2a-4db2-9e04-df2760a94ba4.png", // Person writing
  12: "/lovable-uploads/5a069629-da3a-4bd4-8da2-8806dda8fb89.png", // Code screen
  13: "/lovable-uploads/8a49d07f-1ab4-40cb-8497-6fb9d96f421a.png", // Post-it notes
  14: "/lovable-uploads/1adebbc2-f264-459d-b8c7-d7c4013e30d9.png", // Meeting room
  15: "/lovable-uploads/3db2bf2d-c336-4acb-961b-85fc47a7617d.png", // Reusing AI hand for the last one
};

// Default fallback image if a scheme ID doesn't have a mapping
export const defaultSchemeImage = "/lovable-uploads/8437655c-eaf6-440c-9b87-f8c4d81dee86.png";

/**
 * Get the image path for a specific scheme ID
 */
export const getSchemeImage = (schemeId: number): string => {
  return schemeImageMapping[schemeId] || defaultSchemeImage;
};
