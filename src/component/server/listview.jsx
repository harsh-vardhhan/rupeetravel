const ListView = ({ features }) => {
  return features.map((feature) => {
    return (
      <h2 key={feature.item} className="text-sm font-medium">
        {feature.title}
      </h2>
    );
  });
};

export default ListView;
