# Infinicar

Infinicar est une voiture radiocommandée solaire, pilotable via smartphone, conçue pour fonctionner sans piles ni télécommande dédiée. Le projet vise à réduire l'impact environnemental associé à la production et au recyclage des piles, tout en offrant une expérience utilisateur innovante et durable.

---

## Table des matières

1. [Contexte et problématique](#contexte-et-problématique)
2. [Fonctionnalités](#fonctionnalités)
3. [Architecture](#architecture)
4. [Technologies et outils](#technologies-et-outils)
5. [Installation et configuration](#installation-et-configuration)
6. [Utilisation](#utilisation)
7. [Contribuer](#contribuer)
8. [Licence](#licence)
9. [Auteurs](#auteurs)

---

## Contexte et problématique

Chaque année, près de 6 millions de voitures radiocommandées sont vendues dans le monde, nécessitant environ 30 millions de piles (dont 1,5 million au lithium, soit 1,3 tonne). La production et le recyclage de ces piles génèrent des impacts environnementaux et sociaux importants, notamment l'exploitation de centaines de milliers d'enfants dans les mines de lithium.

## Fonctionnalités

* **Alimentation solaire** : Panneau photovoltaïque embarqué pour une autonomie quasi illimitée.
* **Pilotage smartphone** : Application mobile (iOS, Android & navigateur) pour contrôler la voiture sans télécommande dédiée.
* **Durabilité et réparabilité** : Design modulaire facilitant le remplacement et la réparation des composants.
* **Simulation et modélisation** : Outils OpenModelica pour valider les performances avant prototypage.

## Architecture

```
+-----------------+       +--------------------+
| Panneau solaire | ----> | Module de gestion  |
|  photovoltaïque |       |     d'énergie      |
+-----------------+       +--------------------+
         |                           |
         v                           v
+-----------------+       +--------------------+
| Contrôleur      |       | Moteur DC          |
| Arduino/Python  | ----> | (roues motrices)   |
+-----------------+       +--------------------+
                    ^
                    |
           +----------------+
           | Application     |
           | mobile (BLE/Wi‑Fi)|
           +----------------+
```

## Technologies et outils

* **Matériaux** : PLA, bois, composants électroniques (Microbit,Motor driver, moteurs DC, cellules solaires).

  * Conception 3D : SolidWorks
  * Simulation : OpenModelica
  * Développement embarqué : Microbit code JavaScript

## Installation et configuration

1. Assemblez votre voiture via les pièces fournies ou vos propres pièces :

2. Installez et connecter tout les branchement électrique :

3. Installez le code sur la micro bit :
   Pour gérer les moteurs nous utilisont une carte microbit ainsi qu'un motor driver : "https://github.com/sbcshop/Micro-Bit-Motor-Driver"
   
5. Configurez le gamepad :
  "https://microbit-gamepad.embeddedlog.com/#"
   

## Contribuer
L'équipe de 4 passionés à l'origine du projet ainsi que :
https://github.com/sbcshop (Motor driver)
[https://microbit-gamepad.embeddedlog.com/#](https://www.cytron.io/tutorial/getting-started-with-motion-bit-and-projects-guide-remote-control-via-bluetooth-using-smartphone) (gamepad)

Les contributions sont les bienvenues !

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commitez vos changements (`git commit -m 'Ajout de ...'`)
4. Poussez votre branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request




