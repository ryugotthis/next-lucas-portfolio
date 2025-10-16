export default function Page() {
  return (
    <div className="mt-[100px] px-6 text-[14px] leading-relaxed lg:px-20">
      <h1 className="mb-6 text-2xl font-bold">Informations légales – Lucas Provost</h1>

      <ul className="list-disc space-y-3 pl-6">
        <li>
          <strong>Identité de l&apos;entreprise :</strong> PROVOST Lucas – Entrepreneur individuel –
          44 rue de la madeleine, La Bazoge, 72650.
        </li>
        <li>
          <strong>SIRET :</strong> 889 948 980 00012
        </li>
        <li>
          <strong>Contact :</strong>{' '}
          <a href="mailto:provostlucas.design@gmail.com" className="text-blue-600 underline">
            provostlucas.design@gmail.com
          </a>{' '}
          – 07 59 51 73 74
        </li>
        <li>
          <strong>Identité de l&apos;hébergeur du site :</strong> IONOS SARL, 7 PLACE DE LA GARE
          57200 SARREGUEMINES, 0970 808 911
        </li>
        <li>
          <strong>Créateur :</strong> Lucas Provost
        </li>
        <li>
          <strong>Responsable publication :</strong> Lucas Provost –{' '}
          <a href="mailto:provostlucas.design@gmail.com" className="text-blue-600 underline">
            provostlucas.design@gmail.com
          </a>
          <br />
          <span className="ml-6">
            Le responsable publication est une personne physique ou une personne morale.
          </span>
        </li>
      </ul>
    </div>
  );
}
