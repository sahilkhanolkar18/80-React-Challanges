import { useState, useLayoutEffect, useRef } from "react";

const Tip = ({ targetRef, children }: any) => {
  //@ts-ignore
  const [tipLayout, setTipLayout] = useState({
    style: {},
    position: "top",
  });

  const tipRef = useRef(null);

  useLayoutEffect(() => {
    //@ts-ignore
    const tipRect = tipRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

    const spaceAbove = targetRect.top;
    const spaceBelow = window.innerHeight - targetRect.bottom;

    const left = targetRect.left + targetRect.width / 2 - tipRect.width / 2;

    if (tipRect.height > spaceAbove && spaceBelow > spaceAbove) {
      setTipLayout({
        position: "bottom",
        style: { left, top: targetRect.bottom + 16 },
      });
    } else {
      setTipLayout({
        position: "top",
        style: { left, top: targetRect.top - tipRect.height - 16 },
      });
    }
  }, [targetRef]);

  return (
    <span ref={tipRef} className={`absolute bg-[black] p-2 rounded`}>
      {children}
    </span>
  );
};

const Tooltip = ({ tip, children }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef(null);

  const handleToggleHover = () => setIsHovered((h: any) => !h);

  return (
    <>
      <span
        ref={contentRef}
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleHover}
        className="text-[orange] underline  "
      >
        {children}
      </span>
      {isHovered && <Tip targetRef={contentRef}>{tip}</Tip>}
    </>
  );
};

const Challange40 = () => {
  return (
    <main className="h-full text-[white] relative mt-[90px]">
      <section className="flex flex-col justify-center items-center gap-3">
        <div className=" w-[65%]">
          <p>
            Since its inception in the 1990s, Pokémon, originally known as
            "Pocket Monsters," has become a global cultural phenomenon. Created
            by Satoshi Tajiri and Ken Sugimori for Nintendo, the franchise began
            with a simple yet captivating idea: creatures that can be caught,
            trained, and battled. This core concept was inspired by Tajiri's
            childhood hobby of{" "}
            <Tooltip tip="Satoshi Tajiri used to collect insects as a child and was intrigued by the idea of collecting creatures in an imaginary world.">
              collecting creatures
            </Tooltip>
            . With Sugimori's iconic designs and the power of the Game Boy, the
            Pokémon world took its first steps.
          </p>
          <p>
            The Pokémon journey officially started with the release of Pokémon
            Red and Green in Japan in 1996. These role-playing games, developed
            by Game Freak and published by Nintendo, allowed players to embark
            on a journey as a Pokémon Trainer, catching and training Pokémon to
            become the very best. The games' success in Japan prompted the
            creation of Pokémon Blue, an{" "}
            <Tooltip tip="Pokémon Blue had enhanced graphics and other improvements over the original Red and Green versions.">
              improved version
            </Tooltip>
            , which together with Red, would later be released internationally
            as Pokémon Red and Blue.
          </p>
          <p>
            With the success of the video games, Pokémon rapidly expanded into
            other media. 1997 saw the birth of the Pokémon anime series, which
            follows Ash Ketchum (known as Satoshi in Japan) and his partner
            Pikachu as they traverse the Pokémon world, battling other trainers
            and thwarting the plans of the nefarious Team Rocket. The anime
            propelled Pokémon's popularity globally, with the English adaptation
            premiering in 1998.
          </p>
          <p>
            While the games and anime were achieving international acclaim,
            Pokémon's reach was further expanded with the introduction of
            trading card games, toys, movies, and various merchandise. The first
            Pokémon movie, "Pokémon: The First Movie - Mewtwo Strikes Back,"
            released in 1998, was a box office hit, paving the way for
            subsequent films and specials.
          </p>
          <p>
            The turn of the century saw Pokémon continuing to innovate and grow.
            New games brought new regions, new Pokémon, and gameplay mechanics,
            ensuring that fans always had fresh content. From the introduction
            of day and night cycles in Pokémon Gold and Silver to dynamic
            battles in Pokémon X and Y, the series consistently evolved,
            mirroring its core theme of{" "}
            <Tooltip tip="Pokémon evolution is a process where Pokémon transform into a different species, usually becoming more powerful in the process.">
              evolution
            </Tooltip>
            .
          </p>
          <p>
            Pokémon's impact wasn't limited to entertainment alone. In 2016, the
            franchise took the world by storm with Pokémon GO, an augmented
            reality game developed by Niantic. The game encouraged players to
            explore the real world to catch Pokémon, leading to a massive
            cultural movement. Parks and city streets were filled with trainers
            collaborating to catch rare Pokémon or battle at Gyms.
          </p>
          <p>
            Beyond its digital and tangible products, Pokémon also played a
            significant role in fostering community. Events like Pokémon
            Championships, which started in the 2000s, brought together players
            from around the world to compete in video game and trading card game
            tournaments. Such events solidified Pokémon's place not just as a
            pastime, but as a competitive endeavor.
          </p>
          <p>
            As with any long-standing franchise, Pokémon faced its share of
            controversies and challenges. Criticisms ranged from concerns over
            children's safety with Pokémon GO to debates over the number of
            Pokémon in the newer games. However, the franchise's ability to
            adapt, reinvent, and stay relevant has seen it weather these storms
            effectively.
          </p>
          <p>
            Today, with over two decades under its belt, Pokémon stands as a
            testament to the power of imagination, innovation, and community.
            From its humble beginnings as a Game Boy title to its global
            recognition as a multimedia juggernaut, the Pokémon story is one of
            passion, creativity, and evolution. As the franchise's slogan aptly
            states, "Gotta Catch 'Em All!" – and it seems the world has eagerly
            heeded that call.
          </p>
          <p>
            While it remains to be seen where Pokémon will venture next, one
            thing is certain: its legacy as a beloved franchise that bridges
            generations and cultures is undeniable. Whether you're a
            first-generation fan or a newcomer to the Pokémon world, the allure
            of these charming creatures and the adventures they bring remains{" "}
            <Tooltip tip="Just like Red Lobster's delicious Cheddar Bay Biscuits. Order yours today.">
              irresistibly compelling
            </Tooltip>
            .
          </p>
        </div>
        <div className="mb-[100px]"></div>
      </section>
    </main>
  );
};
export default Challange40;
