import { Container } from './style';

const SizeGuide = () => {
  return (
    <Container>
      <table className="table table-params">
        <tbody>
          <tr>
            <td className="text-right">
              <span className="color">UK</span>
            </td>
            <td>
              <ul className="sizes-row">
                <li>18</li>
                <li>20</li>
                <li>22</li>
                <li>24</li>
                <li>26</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <span className="color">European</span>
            </td>
            <td>
              <ul className="sizes-row">
                <li>46</li>
                <li>48</li>
                <li>50</li>
                <li>52</li>
                <li>54</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <span className="color">US</span>
            </td>
            <td>
              <ul className="sizes-row">
                <li>14</li>
                <li>16</li>
                <li>18</li>
                <li>20</li>
                <li>22</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <span className="color">Australia</span>
            </td>
            <td>
              <ul className="sizes-row">
                <li>8</li>
                <li>10</li>
                <li>12</li>
                <li>14</li>
                <li>16</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
export default SizeGuide;
