import React from "react";

type SectionTambahMobilProps = {
  setTambahMobil: React.Dispatch<React.SetStateAction<number>>;
};

export default function SectionTambahMobil({
  setTambahMobil,
}: SectionTambahMobilProps) {
  return (
    <div>
      SectionTambahMobil :{" "}
      <button onClick={() => setTambahMobil(100)}>add 100 mobil</button>
    </div>
  );
}
