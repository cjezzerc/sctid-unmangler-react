
export const simple_data = `10676871000119100	Allergic contact dermatitis caused by chemical
762383000	Allergic contact dermatitis caused by cutting oil
1155943009	Allergic contact dermatitis caused by metal and/or metal compound
291000119100	Contact dermatitis caused by chemical
10628551000119100	Irritant contact dermatitis caused by rubber`

export const messy_data = `1097811000000100	Arterial oxygen saturation breathing room air at rest (observable entity)
11805901000001100
999002071000000000
900000000000462000
1089881000119100        Minimal keratinized residual ridge mucosa
11750801000001100
10760821000119100
900000000000497000
SNO63700574768824
37331000000100	| Comment note (record artifact) |
703421000	Temperature (observable entity)
15366271000001108
8388100084567440 (1Made up; 6 digits; penult digit not 1 or 0)
4036431000001100 Made up; not valid; reconstruction does not exist(16)
4736431000001100 Made up; valid but not in release; R-CID is the same(16)
29760821000119100  Made up; Valid but not in release; R-CID is same
28760821000119100  Made up; not Valid ; R-CID is same
1120381000000110 Swine influenza contact (16 digit description ID)`;

export const master_set_with_commentary = `1082551000000105	16 digits; does not have appropriate pattern of trailing zeroes to be corrupted
1082551000000100	16 digits; can be reconstructed to a Concept Id
1012131000001110	16 digits; can be reconstructed to a Description Id (provided allow Description Ids)
1085961000119100	16 digits; although ends in 0, the provided ID exists in the release, and it is a Concept Id. Hence "silent".
1044401000000110	16 digits; although ends in 0, the provided ID exists in the release, and it is a Description Id. Hence "silent" (provided allow Description Ids)
4036431000001100	16 digits; ends in 0 but reconstruction does not exist in the release (penultimate digit 0)
2459643000001110	16 digits; ends in 0 but reconstruction does not exist in the release (penultimate digit 1)
3333333330009150	16 digits; penultimate digit is a neither a 0 nor a 1 so cannot reconstruct to a concept or Description Id.
10836111000119108	17 digits; does not have appropriate pattern of trailing zeroes to be corrupted
10836111000119100	17 digits; can be reconstructed to a Concept Id
35682801000001100	17 digits; can be reconstructed to a Description Id (provided allow Description Ids)
11972301000001100	17 digits; can be reconstructed to both a Concept and a Description Id (provided allow Description Ids)
44012211000001100	17 digits; although ends in 00, the provided ID exists in the release, and it is a Concept Id. Hence "silent". (No equivalent case can exist for a Description Id for 17 digits)
11424801000001100	17 digits; although ends in 00, the provided ID exists in the release, and it is a Concept Id. Hence "silent". However it can also be reconstructed to be a Description ID (provided allow Description IDs) so is ambiguous in that case.
28760821000119100	17 digits; ends in 00 but no reconstruction exists in the release 
262421481000087107	18 digits; does not have appropriate pattern of trailing zeroes to be corrupted
262421481000087000	18 digits; can be reconstructed to a Concept Id
106637601000001000	18 digits; can be reconstructed to a Description Id (provided allow Description Ids)
999001741000000000	18 digits; can be reconstructed to both a Concept and a Description Id (provided allow Description Ids)
900000000000497000	18 digits; although ends in 000, the provided ID exists in the release, and it is a Concept Id. Hence "silent". (No equivalent case can exist for a Description Id for 18 digits). Because starts 90000 is a "short form" case so penpenultimate digit is 0. Silent cases for 18 digits can only be the 90000 forms as otherwise digit 16 is a 1 so cannot be silent. (To date there are only 10 such cases.)
900000000000478000	17 digits; although ends in 000, the provided ID exists in the release, and it is a Concept Id. Hence "silent". Silent cases for 18 digits can only be the 90000 forms as otherwise digit 16 is a 1 so cannot be silent. (To date there are only 10 such cases.)  However it can also be reconstructed to be a Description ID (provided allow Description IDs) so is ambiguous in that case. (To date there are only 3 such cases)
145670821000119000	18 digits; ends in 000 but no reconstruction exists in the release 
125605004	Not 16-18 digits
S1082551000000105	Not purely digits`;

export const contact_dermatitis = `10676871000119100	Allergic contact dermatitis caused by chemical
762383000	Allergic contact dermatitis caused by cutting oil
890284005	Allergic contact dermatitis caused by grease
770545005	Allergic contact dermatitis caused by iodine
770588002	Allergic contact dermatitis caused by iodophore
1155943009	Allergic contact dermatitis caused by metal and/or metal compound
238576003	Allergic contact dermatitis caused by nickel from implant
890283004	Allergic contact dermatitis caused by oil
770589005	Allergic contact dermatitis caused by povidone iodine
762386008	Allergic contact dermatitis caused by rubber compound
870749003	Allergic contact dermatitis due to usnic acid
291000119100	Contact dermatitis caused by chemical
200784004	Contact dermatitis caused by chlorinated hydrocarbon
200802008	Contact dermatitis due to acids
200804009	Contact dermatitis due to alkali
200881003	Contact dermatitis due to casting materials
93418006	Contact dermatitis due to chromium
200785003	Contact dermatitis due to cyclohexane
42733007	Contact dermatitis due to dichromate
200786002	Contact dermatitis due to ester
200787006	Contact dermatitis due to glycol
200788001	Contact dermatitis due to hydrocarbon
83150005	Contact dermatitis due to iodine
200789009	Contact dermatitis due to ketone
81581001	Contact dermatitis due to mercurial
32371003	Contact dermatitis due to neomycin
93419003	Contact dermatitis due to nickel
83508001	Contact dermatitis due to nylon
111190006	Contact dermatitis due to phenol
31948006	Contact dermatitis due to plastic
46240005	Contact dermatitis due to rubber
23012005	Contact dermatitis due to solvents
402258000	Danthron erythema
238568000	Grease contact dermatitis
10628591000119100	Irritant contact dermatitis caused by chemical
897040003	Irritant contact dermatitis caused by chlorine in swimming pool
890280001	Irritant contact dermatitis caused by grease
10628631000119100	Irritant contact dermatitis caused by metal
890279004	Irritant contact dermatitis caused by oil
10628551000119100	Irritant contact dermatitis caused by rubber
402271002	Irritant contact dermatitis due to chlorine
402582009	Irritant contact dermatitis due to solvent
890282009	Irritant contact dermatitis of hand caused by grease
890281002	Irritant contact dermatitis of hand caused by oil
402266009	Irritant contact dermatitis of hands due to solvent
762561000	Occupational allergic contact dermatitis caused by cutting oil
762566005	Occupational allergic contact dermatitis caused by metal compound
762574006	Occupational allergic contact dermatitis caused by rubber compound
238569008	Oil contact dermatitis`