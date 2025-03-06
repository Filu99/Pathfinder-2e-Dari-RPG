const database ={
    Firearms :{
        DuelingPistol :{
            dueling_pistol_shots: [
                "modules/DKDatabase/Firearms/DuelingPistol/gun1.mp3",
                "modules/DKDatabase/Firearms/DuelingPistol/gun2.mp3",
                "modules/DKDatabase/Firearms/DuelingPistol/gun3.mp3",
                "modules/DKDatabase/Firearms/DuelingPistol/gun4.mp3",
                "modules/DKDatabase/Firearms/DuelingPistol/gun5.mp3"
            ]
        },
        Handcannon :{
            handcannon_shots: [
                "modules/DKDatabase/Firearms/Handcannon/Handcannon1.mp3",
                "modules/DKDatabase/Firearms/Handcannon/Handcannon2.mp3",
                "modules/DKDatabase/Firearms/Handcannon/Handcannon3.mp3",
                "modules/DKDatabase/Firearms/Handcannon/Handcannon4.mp3",
                "modules/DKDatabase/Firearms/Handcannon/Handcannon5.mp3"
            ]
        },
        Ricochets :{
            ricochet_sounds: [
                "modules/DKDatabase/Firearms/Ricochets/ricochet1.mp3",
                "modules/DKDatabase/Firearms/Ricochets/ricochet2.mp3",
                "modules/DKDatabase/Firearms/Ricochets/ricochet3.mp3"
            ]
        }
    },

    Mele :{
        BiteAttack :{
            bite_hit: [
                "modules/DKDatabase/Mele/BiteAttack/monster_bite.mp3"
            ]
        },
        ClawsAttack :{
            claws_hit: [
                "modules/DKDatabase/Mele/ClawsAttack/claws_hit.mp3"
            ],
            claws_miss: [
                "modules/DKDatabase/Mele/ClawsAttack/claws_miss.mp3"
            ]
        },
        Sickle :{
            sickle_hit: [
                "modules/DKDatabase/Mele/Sickle/sickle_hit2.mp3",
                "modules/DKDatabase/Mele/Sickle/sickle_hit3.mp3",
                "modules/DKDatabase/Mele/Sickle/sickle_hit4.mp3"
            ],
            sickle_miss: [
                "modules/DKDatabase/Mele/Sickle/sickle_miss.mp3"
            ]
        }
    },

    Ranged :{
        Sling :{
            sling_miss: [
                "modules/DKDatabase/Ranged/Sling/sling_miss.mp3"
            ],
            sling_stretch: [
                "modules/DKDatabase/Ranged/Sling/sling_stretch.mp3"
            ],
            sling_throw: [
                "modules/DKDatabase/Ranged/Sling/sling_throw.mp3"
            ]
        }
    },

    Misc :{
        FlaskEffects :{
            flask_zap: [
                "modules/DKDatabase/Misc/FlaskEffects/flask_zap.mp3"
            ],
            flask_spill: [
                "modules/DKDatabase/Misc/FlaskEffects/flask_spill.mp3"
            ],
            flask_smash: [
                "modules/DKDatabase/Misc/FlaskEffects/flask_smash.mp3"
            ],
            flask_fire: [
                "modules/DKDatabase/Misc/FlaskEffects/flask_fire.mp3"
            ]
        },
        PotionEffects :{
            potion_drinking: [
                "modules/DKDatabase/Misc/PotionEffects/potion_drinking.mp3"
            ]
        },
        SpikeGrenade :{
            spike_grenade: [
                "modules/DKDatabase/Misc/SpikeGrenade/spike_grenade.mp3"
            ]
        },
        Miscellaneous :{
            heal_up: [
                "modules/DKDatabase/Misc/heal_up.mp3"
            ],
            torch: [
                "modules/DKDatabase/Misc/torch.mp3"
            ],
            smoke_puff: [
                "modules/DKDatabase/Misc/smoke_puff.mp3"
            ]
        },
    },

    Abilities :{
       StanleyKowalski : {
           called_shot: [
               "modules/DKDatabase/Abilities/StanleyKowalski/CalledShot/called_shot_sonar.mp3"
           ],
           final_shot: [
               "modules/DKDatabase/Abilities/StanleyKowalski/FinalShot/final_shot.mp3"
           ],
           fanes_escape: [
               "modules/DKDatabase/Abilities/StanleyKowalski/FanesEscape/fanes_escape.mp3"
           ]
       }
    },

    MonsterTransformation :{
        build_up: [
            "modules/DKDatabase/MonsterTransformation/monster_buildUp.mp3"
        ],
        growl: [
            "modules/DKDatabase/MonsterTransformation/monster_growl1.mp3",
            "modules/DKDatabase/MonsterTransformation/monster_growl2.mp3",
            "modules/DKDatabase/MonsterTransformation/monster_growl3.mp3",
            "modules/DKDatabase/MonsterTransformation/monster_growl4.mp3",
            "modules/DKDatabase/MonsterTransformation/monster_growl5.mp3"
        ]
    },

    TokenArts :{
        AzulonBlack :{
            normal: [
                "modules/DKDatabase/TokenArts/AzulonBlack/Azulon_normal.png"
            ],
            transformed: [
                "modules/DKDatabase/TokenArts/AzulonBlack/Azulon_transformed.png"
            ]
        },
       Giuliano :{
            nomal: [
                "modules/DKDatabase/TokenArts/Giuliano/Giuliano_normal.png"
            ],
           transformed: [
               "modules/DKDatabase/TokenArts/Giuliano/Giuliano_transformed.png"
           ]
       },
       JacobNotaisky :{
            nomal: [
                "modules/DKDatabase/TokenArts/JacobNotaisky/Jacob_normal.png"
            ],
           transformed: [
               "modules/DKDatabase/TokenArts/JacobNotaisky/Jacob_transformed.png"
           ]
       },
       StanleyKowalski :{
            nomal: [
                "modules/DKDatabase/TokenArts/StanleyKowalski/Stanley_normal.png"
            ],
           transformed: [
               "modules/DKDatabase/TokenArts/StanleyKowalski/Stanley_transformed.png"
           ]
       }
    },
    Animations :{
        Lootbox :{
            chest_opening: [
                "modules/DKDatabase/Animations/Lootbox/lootbox_open.gif",
            ]
        }
    }
}
Sequencer.Database.registerEntries("DKDatabase", database);