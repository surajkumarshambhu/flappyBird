import java .util.HashMap;
public class questionOnMap{
	public static void main(String[] args){
		String str="lrfjijslrghwlghrwo";
		HashMap<Character.Integer>map=new HashMap<>();
		for(int i=0;i<str.length();i++){
			if(map.containsKey(str.CharAt(i))){
				int value=map.get(str.CharAt(i));
				map.put(str.CharAt(i),value+1);

			}
			else{
				map.put(str.CharAt(i),1);
			}
		}
	}
}