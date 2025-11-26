type Prop = {
  toggleModal: () => void;
};

const BankAccountDetails = ({ toggleModal }: Prop) => {
  return (
    <div className="bg-white shadow-lg">
      <p onClick={toggleModal}>close</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil
        fuga labore corporis consequatur dolorum, cum molestiae velit quisquam
        officiis eveniet enim repudiandae, sint, recusandae maxime accusamus
        minima natus soluta a optio? Quo voluptates excepturi error iste fuga
        doloribus quas alias corrupti, totam saepe optio rem perspiciatis ex
        cumque similique illum, culpa laudantium corporis? Cupiditate rem
        mollitia beatae quisquam assumenda temporibus maiores nulla expedita
        nemo dolor accusantium ducimus omnis perferendis, eaque rerum iure qui
        adipisci aperiam nisi explicabo! Iure, veritatis aliquid ea enim id
        quidem tempora laborum animi obcaecati dolor deserunt reprehenderit
        numquam cumque harum repellat deleniti vitae dolorem suscipit.
      </p>
    </div>
  );
};

export { BankAccountDetails };
