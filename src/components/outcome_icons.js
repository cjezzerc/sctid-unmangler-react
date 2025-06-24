// the following imports and "?url" seem to be needed to get assets to work right when make production build
import icon_pcu_url from "../assets/possible_corruption_unambig.svg?url"; 
import icon_pca_url from "../assets/possible_corruption_ambig.svg?url";
import icon_asil_url from "../assets/any_corruption_is_silent.svg?url";
import icon_acbs_url from "../assets/ambig_could_be_silent.svg?url";
import icon_nre_url from "../assets/no_reconstructions_exist.svg?url";
import icon_green_tick_url from "../assets/green_tick.svg?url";
import icon_red_cross_url from "../assets/red_cross.svg?url";

export const status_icons = {
  "OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG":
    icon_pcu_url,
    // "src/assets/possible_corruption_unambig.svg",
  "OutcomeCodes.POSSIBLE_CORRUPTION_AMBIG":
    icon_pca_url,
    // "src/assets/possible_corruption_ambig.svg",
  "OutcomeCodes.ANY_CORRUPTION_IS_SILENT":
    icon_asil_url,
    // "src/assets/any_corruption_is_silent.svg",
  "OutcomeCodes.AMBIG_COULD_BE_SILENT": 
    icon_acbs_url,
  // "src/assets/ambig_could_be_silent.svg",
  "OutcomeCodes.NO_RECONSTRUCTIONS_EXIST":
    icon_nre_url,
    // "src/assets/no_reconstructions_exist.svg",
};

export const true_false_icons = {
  true: icon_green_tick_url,   //"src/assets/green_tick.svg",
  false: icon_red_cross_url,   // "src/assets/red_cross.svg",
};